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
})