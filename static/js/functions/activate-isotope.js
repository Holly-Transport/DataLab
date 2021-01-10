document.addEventListener('DOMContentLoaded', function() {

	const iso = new Isotope( '', {
		itemSelector: '',
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