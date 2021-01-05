const Workshops = (function () {
	'use strict'

	// Methods
	const formatIntoDateType = function (stringDate) {
		// Convert string date into Date type.
		if (stringDate.textContent) {
			return new Date(stringDate.textContent)
		} else {
			throw new Error("The argument provided is not a string. Please check your arguments type.")
		}
	}

	const separateWorkshops = function(selector) {
		const workshopArray = document.querySelectorAll(selector)
		const separatedWorkshops = {
			upcomingWorkshops: [],
			pastWorkshops: []
		}
		workshopArray.forEach(workshop => {
				// Formats String date into Date Type
				const stringDate = workshop.children.item(1).querySelector('.date')
				if (stringDate !== null) {
					const formattedDateType = formatIntoDateType(stringDate)

					// Check date of post and compare to current Date.
					// If upcoming, insert into new array for upcoming workshops.
					// Else, insert into past workshops array. Sort by date. Insert into DOM.  
					formattedDateType > Date.now()
					? processWorkshopAndPush(workshop, separatedWorkshops.upcomingWorkshops, formattedDateType, 'upcoming')
					: processWorkshopAndPush(workshop, separatedWorkshops.pastWorkshops, formattedDateType, 'past')
				}
				return separatedWorkshops
		})
		return separatedWorkshops
	}
	
	const formatToLocalDateString = function(date) {
		if(typeof date === 'object') {
			return date.toLocaleDateString()
		} else {
			throw new Error("The date you selected does not have a valid date in its textContent's value.")
		}
	}
	
	const addNewDateToWorkshop = function (workshop, formattedDate) {
		workshop.children.item(1).querySelector('.date').textContent = formattedDate
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
	const injectWorkshops = function(workshopList, container, className) {
		workshopList.forEach(workshop => {
			workshop.classList.add(className)
			workshop.style.display = "flex"
			container.appendChild(workshop)
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

	/**
	 * Create the Constructor object
	 */
	const Constructor = function(selector, options) {
		// Variables
		const publicAPIs = {}
		 

		
		// Initializes Workshop constructor
		publicAPIs.init = function (options = false) {
			// 1. Gets an Array of all Workshops.
			const workshops = separateWorkshops(selector)
			// 2. Separates workshops by Date.
			
			// Save workshop Arrays into variables. 
			const upcomingWorkshops = workshops.upcomingWorkshops
			const pastWorkshops = workshops.pastWorkshops
			

			// If an isHomePage option is provided
			// inputs into the Home Page's 
			// Upcoming or Past Workshops containers.
			if(options.isHomePage) {
				const upcomingWorkshopsContainer = document.querySelector('.upcoming-workshops-list')
				const pastWorkshopsContainer = document.querySelector('.past-workshops-list')
				injectWorkshops(upcomingWorkshops, upcomingWorkshopsContainer, 'upcoming')
				injectWorkshops(pastWorkshops, pastWorkshopsContainer, 'past')
			} else {
				// Inserts into element with .workshops-container class.
				const workshopsContainer = document.querySelector('.workshops-container')
				injectWorkshops(upcomingWorkshops, workshopsContainer, 'upcoming')
				injectWorkshops(pastWorkshops, workshopsContainer, 'past')
			}
		}

		// Initialize plugin and takes isHomePage boolean.
		publicAPIs.init(options)
		// Return the Public APIs
		return publicAPIs
	}
	return Constructor
})()

export default Workshops
