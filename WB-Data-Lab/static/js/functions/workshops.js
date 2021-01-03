const Workshops = (function () {
	'use strict'

	// Methods
	const getWorkshopsArray = function (selector) {
		let workshopItems = document.querySelectorAll(selector)
		let workshopsArray = [] // Instantiate a Workshops Array
	
		workshopItems.forEach(workshop => { 
			console.log(workshop)
			// Loop through all list items inserted by Hugo
			workshop.remove() // Remove all workshop li's from DOM.
			let workshopChildren = Array.from(workshop.children)
			// Turn each element into an object with h3 Title, Date and Paragraph values.
			console.log(workshopChildren)
			let workshopElements = {
				title: workshopChildren[0],
				date: workshopChildren[1],
				paragraph: workshopChildren[2],
			}
			// Push each element into the Workshops Array.
			workshopsArray.push(workshopElements)
			return workshopsArray
		})
		return workshopsArray
	}
	
	const formatToLocalDateString = function(date) {
		if(typeof date === 'object') {
			return date.toLocaleDateString()
		} else {
			throw new Error("The date you selected does not have a valid date in its textContent's value.")
		}
	}
	
	const formatIntoDateType = function (stringDate) {
		// Convert string date into Date type.
		if (stringDate.textContent) {
			return new Date(stringDate.textContent)
		} else {
			throw new Error("The argument provided is not a string. Please check your arguments type.")
		}
	}
	
	const addNewDateToWorkshop = function (workshop, formattedDate) {
		workshop.date.children[0].textContent = formattedDate
		return workshop
	}
	
	const pushToUpcomingOrPast = function (workshop, newSeparatedWorkshops) {
		return newSeparatedWorkshops.push(workshop)
	}
	
	const processWorkshopAndPush = function(workshop, newSeparatedWorkshops, formattedDate) {
		let localDateString = formatToLocalDateString(formattedDate)
		let workshopWithLocaleDate = addNewDateToWorkshop(workshop, localDateString)
		return pushToUpcomingOrPast(workshopWithLocaleDate, newSeparatedWorkshops)
	}

	// Receives either an Upcoming or Past Workshops Array, a container to append each workshop and a class name for filtering.
	const createAndAppendItem = function(workshopList, container, className) {
		workshopList.forEach(listItem => {
			const newListItem = document.createElement("li")
			newListItem.appendChild(listItem.title)
			newListItem.appendChild(listItem.date)
			newListItem.appendChild(listItem.paragraph)
			newListItem.style.display = "block"
			newListItem.classList.add(className)
			container.appendChild(newListItem)
		})
	}


	// Filter for Workshops & Training Page.
	// const workshopFilters = function () {
	//   // // Workshop filters
	//   const dateFilter = document.querySelector("#filter-date")
	//   const workshopTypeFilter = document.querySelector("#filter-workshop-type")

	//   // Methods
	//   const filterDate = function (e) {
	//     // console.log(e.target.value)
	//   }

	//   if (dateFilter) {
	//     dateFilter.addEventListener("change", filterDate)
	//   }
	// }


	const Constructor = function(selector, options) {
		// Variables
		const publicAPIs = {}
		 
		// Check date of post, if upcoming, insert into new array for upcoming workshops.
		// Else, insert into past workshops array. Sort by date. Insert into DOM.  

		const separateWorkshops = function(workshops) {
			let separatedWorkshops = {
				upcomingWorkshops: [],
				pastWorkshops: []
			}
		
			workshops.map(workshop => {
				const stringDate = workshop.date.querySelector('.date')
				let formattedToDateTypeDate = formatIntoDateType(stringDate)
				// Checks if workshop is upcoming or a past workshop and pushes into the respective array.
		
				formattedToDateTypeDate > Date.now()
					? processWorkshopAndPush(workshop, separatedWorkshops.upcomingWorkshops, formattedToDateTypeDate, 'upcoming')
					: processWorkshopAndPush(workshop, separatedWorkshops.pastWorkshops, formattedToDateTypeDate, 'past')
			})
			return separatedWorkshops
		}
		
		publicAPIs.init = function (options = false) {
			// 1. Gets an Array of all Workshops.
			const workshops = getWorkshopsArray(selector)
			// 2. Separates workshops by Date.
			const separatedWorkshops = separateWorkshops(workshops)
	
			const upcomingWorkshops = separatedWorkshops.upcomingWorkshops
			const pastWorkshops = separatedWorkshops.pastWorkshops
			
			if(options.isHomePage) {
				const upcomingWorkshopsContainer = document.querySelector('.upcoming-workshops-list')
				const pastWorkshopsContainer = document.querySelector('.past-workshops-list')
			
				// for(let i = 0; i <= 2; i++) {
					createAndAppendItem(upcomingWorkshops, upcomingWorkshopsContainer, 'upcoming')
					createAndAppendItem(pastWorkshops, pastWorkshopsContainer, 'past')
				// }
			} else {
				const workshopsContainer = document.querySelector('.workshops-container')
				createAndAppendItem(upcomingWorkshops, workshopsContainer, 'upcoming')
				createAndAppendItem(pastWorkshops, workshopsContainer, 'past')

			}

		}
		publicAPIs.init(options)
		// Return the Public APIs
		return publicAPIs
	}
	return Constructor
})()

export default Workshops
