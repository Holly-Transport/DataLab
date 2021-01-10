import Workshops from '../functions/workshops.js'

document.addEventListener('DOMContentLoaded', function() {
	// Run Workshops constructor for Workshop Page.
	const processWorkshops = new Workshops('.card-grid > .grid-card')
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

	// window.iso = iso

	const filters = {}

	const filterSels = document.querySelector(".filters")

	filterSels.addEventListener('change', (event) => {
		var changedSel = event.target
		var changedSelGroup = changedSel.getAttribute('value-group')
		filters[changedSelGroup] = event.target.value
		var filterValue = concatValues(filters)
		console.log(filterValue)
		console.log(iso)
		return iso.arrange({ filter: filterValue })
	})
})