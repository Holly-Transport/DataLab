/**
 * Dropdown menu
 */

document.addEventListener('DOMContentLoaded', function() {
	const menus = document.querySelectorAll('.burger-menu')
	const dropdowns = document.querySelectorAll('.navbar-menu')

	if (menus.length && dropdowns.length) {
		menus.forEach(menu => {
			menu.addEventListener('click', () => {
				console.log('CLick')
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
			date: workshopChildren[1].querySelector('.date'),
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
			let workshopDate = workshop.date
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
				const formattedDate = new Date(upcomingWorkshop.date.textContent).toLocaleDateString()
				upcomingWorkshop.date.textContent = formattedDate
				upcomingListItem.appendChild(upcomingWorkshop.date)
				upcomingListItem.appendChild(upcomingWorkshop.paragraph)
				upcomingWorkshopsList.appendChild(upcomingListItem)
			})

			// Create and insert past li's into corresponding container.
			let pastListItem = document.createElement('li')
			console.log(pastWorkshopsArray) 
			pastWorkshopsArray.forEach(pastWorkshop => {
				pastListItem.appendChild(pastWorkshop.title)
				const formattedDate = new Date(pastWorkshop.date.textContent).toLocaleDateString()
				pastWorkshop.date.textContent = formattedDate
				pastListItem.appendChild(pastWorkshop.date)
				pastListItem.appendChild(pastWorkshop.paragraph)
				pastWorkshopsList.appendChild(pastListItem)
			})

			// upcomingWorkshopsContainer.style.display = "flex";
			// pastWorkshopsContainer.style.display = "flex";
})
