/**
 * Dropdown menu
 */

document.addEventListener('DOMContentLoaded', function() {
	'use strict'

	const menus = document.querySelectorAll('.burger-menu')
	const dropdowns = document.querySelectorAll('.navbar-menu')

	if (menus.length && dropdowns.length) {
		menus.forEach(menu => {
			menu.addEventListener('click', () => {
				dropdowns.forEach(dropdown => {
					dropdown.classList.toggle('is-active')
				})
			})
		})
	}


	// Move later into its own file. 

	// Workshop filters 

	// const dateFilter = document.querySelector('#filter-date')
	// const workshopTypeFilter = document.querySelector('#filter-workshop-type')


	// Upcoming and past workshop h3 headings with Dates as textContent.
	const upcomingWorkshopsContainer  = document.querySelector('.upcoming-workshops')
	const pastWorkshopsContainer  = document.querySelector('.past-workshops')

	// Instantiate a Workshops Array
	let workshopsArray = [] 

	// Loop through all list items inserted by Hugo
	document.querySelectorAll('.workshops-container li').forEach(workshop => {
		workshop.remove() // Remove all workshop li's from DOM.
		let workshopChildren = Array.from(workshop.children)
		
		// Turn each element into an object with Title, Date and Paragraph values. 
		let workshopElements = {
			title: workshopChildren[0],
			date: workshopChildren[1],
			paragraph: workshopChildren[3]
		}
		// Push each element into the Workshops Array.
		workshopsArray.push(workshopElements)
		return workshopsArray
	})
	
	/* 
			Check date of post, if upcoming, insert into new array for upcoming workshops.
			Else, insert into past workshops array. Sort by date. Insert into DOM.  
		*/

		let upcomingWorkshopsArray = []
		let pastWorkshopsArray = []

		workshopsArray.map(workshop => {
			let workshopDate = workshop.date.querySelector('.date')
			// Convert string date into Date type.
			const formattedDate = new Date(workshopDate.textContent)

			// Checks if workshop is upcoming or a past workshop and pushes into the respective array.
			formattedDate > Date.now() ? upcomingWorkshopsArray.push(workshop) : pastWorkshopsArray.push(workshop)
		})
			// Select Upcoming and Past workshops respective container elements in DOM.
			const upcomingWorkshopsList  = document.querySelector('.upcoming-workshops-list')
			const pastWorkshopsList  = document.querySelector('.past-workshops-list')

			// Create and insert upcoming li's into corresponding container. 
			let upcomingListItem = document.createElement('li')
			upcomingWorkshopsArray.forEach(upcomingWorkshop => {
				upcomingListItem.appendChild(upcomingWorkshop.title)
				const formattedDate = new Date(upcomingWorkshop.date.querySelector('.date').textContent).toLocaleDateString()
				upcomingWorkshop.date.querySelector('.date').textContent = formattedDate
				upcomingListItem.appendChild(upcomingWorkshop.date)
				upcomingListItem.appendChild(upcomingWorkshop.paragraph)
				upcomingWorkshopsList.appendChild(upcomingListItem)
			})

			// Create and insert past li's into corresponding container.
			let pastListItem = document.createElement('li')
			pastWorkshopsArray.forEach(pastWorkshop => {
				pastListItem.appendChild(pastWorkshop.title)
				const formattedDate = new Date(pastWorkshop.date.querySelector('.date').textContent).toLocaleDateString()
				pastWorkshop.date.querySelector('.date').textContent = formattedDate
				pastListItem.appendChild(pastWorkshop.date)
				pastListItem.appendChild(pastWorkshop.paragraph)
				pastWorkshopsList.appendChild(pastListItem)
			})

			upcomingWorkshopsContainer.style.display = "flex";
			pastWorkshopsContainer.style.display = "flex";

			// const accordionItem = document.querySelectorAll('details')

			// accordionItem.forEach(item => {
			// 	item.addEventListener('click', function(e) {
			// 		console.log(e.target.toString())
			// 		if (e.target.toString() == '[object HTMLHeadingElement]') {
			// 			console.log('HI!')
			// 			item.removeAttribute("open")
			// 		}
			// 	})
			// })

			let Accordions = (function() {
				'use strict';


				const closeOthers = (current, parent) => {
					let opened = Array.from(parent.querySelectorAll('details[open]'))
					console.log(opened)

					//Close open ones that aren't current accordion
					opened.forEach(accordion => {
						if(accordion == current) return 
						accordion.removeAttribute('open')
					}) 
				}

				const toggle = (event, selector) => {
					// Only run on accordions inside our selector
					let parent = event.target.closest(selector)
					console.log(parent)
					if (!parent) return

					// Only run if accordion is open
					if (!event.target.hasAttribute('open')) return 

					// Close any existing open accordions. 
					closeOthers(event.target, parent)
				}

				/**
				* Create the Constructor object
				*/
				var Constructor = function(selector)   {
					// Variables
			
					var publicAPIs = {};
					

					// Methods

					const toggleHandler = function(event) {
						toggle(event, selector)
					}

					publicAPIs.destroy = function() {

					}
					publicAPIs.init = function() {
						// Check for errors. 
						if (!selector || typeof selector !== 'string') {
							throw new Error ('Please provide a valid selector')
						}
						
						// Listen for when accordions open
						document.addEventListener('toggle', toggleHandler, true)
					}

					// const openedAccordion = Array.from(document.querySelectorAll(`${selector} details[open]`))
					// // console.log(openedAccordion)
					
					// openedAccordion.forEach(accordion => {
					// 	console.log(accordion)
					// 	closeOthers(event.target, parent)
					// })

					// Initialize and return Public APIs
					publicAPIs.init()
					console.log('Public:', publicAPIs)
					return publicAPIs;
				};
			
				// Return the Constructor
				return Constructor;
			
			})();
			// Instantiate accordion plugin.
			let leftAccordion = new Accordions('[data-accordion="left"]')
			let rightAccordion = new Accordions('[data-accordion="right"]')

			console.log(accordion)
})
