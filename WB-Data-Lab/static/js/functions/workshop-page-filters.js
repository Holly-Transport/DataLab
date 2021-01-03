import Workshops from '../functions/workshops.js'

document.addEventListener('DOMContentLoaded', function() {
	// Run Workshops constructor for Workshop Page.
	const workshopPage = new Workshops('.card-grid li')
	
	   // Flatten object by concatenating values
		 function concatValues(obj) {
			let value = ''
			for (let prop in obj) {
					value += obj[prop]
			}
			return value
	}

	const iso = new Isotope( '.card-grid', {
			itemSelector: '.grid-card',
			layoutMode: 'fitRows',
			percentPosition: true
	})

	window.iso = iso

	const filters = {}

	const filterSels = document.querySelector(".filters")
	filterSels.addEventListener('change', (event) => {
			console.log(event)
			let changedSel = event.target
			let changedSelGroup = changedSel.getAttribute('value-group')
			filters[changedSelGroup] = event.target.value
			let filterValue = concatValues(filters)
			console.log(filterValue.replace(" ", "*"))
			iso.arrange({ filter: filterValue })
	})
})