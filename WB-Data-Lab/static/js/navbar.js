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
const dateFilter = document.querySelector('#filter-date')
const workshopTypeFilter = document.querySelector('#filter-workshop-type')

const upcoming = document.querySelector('#filter-workshop-type')

console.log(dateFilter)
console.log(workshopTypeFilter)



})


