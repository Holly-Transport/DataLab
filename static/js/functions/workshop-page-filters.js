import Workshops from '../functions/workshops.js'

document.addEventListener('DOMContentLoaded', function() {
	// Run Workshops constructor for Workshop Page.
	const processWorkshops = new Workshops('.card-grid .card')
	const workshopCards = document.querySelectorAll('.card')
	
	   // Flatten object by concatenating values
		 function concatValues(obj) {
			let value = ''
			for (let prop in obj) {
					value += obj[prop]
			}
			return value
	}

	// const iso = new Isotope( '.card-grid', {
	// 		itemSelector: '.card',
	// 		layoutMode: 'fitRows',
	// 		percentPosition: true
	// })

	// window.iso = iso

	const filters = {}

	const filterSels = document.querySelector(".filters")
	const filtersArray = filterSels.children

	filterSels.addEventListener('change', (event) => {
			console.log('Filters:', filtersArray)
			let currentFilter = event.target
			console.log('Current Filter:', currentFilter)
			let changedSelGroup = currentFilter.getAttribute('value-group')
			console.log('Current Filter Attribute:', changedSelGroup)

			filters[changedSelGroup] = event.target.value
			// console.log(filters)
			let filterValue = concatValues(filters)
			let otherFilter
			console.log('FindIndex', filtersArray[currentFilter.value])
			// if(filtersArray[currentFilter] !== currentFilter.value) {
			// 	console.log('Huh?!')
			// }
			if(workshopCards) {
				const workshopsArray = Array.from(workshopCards)
				workshopsArray.forEach(workshop => {
					console.log('Filter Value:', filterValue)
					console.log(workshop.classList)
					console.log(workshop.classList.contains(filterValue))
					if (workshop.classList.contains(filterValue)) {
						workshop.style.display = "flex"
					} else {
						workshop.style.display = "none"
					}
				})
			}
			// iso.arrange({ filter: filterValue })
	})
})