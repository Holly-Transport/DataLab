document.addEventListener('DOMContentLoaded', function() {
	const mobileMenu = function() {
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
	}
	
	
	let MobileMenu = mobileMenu()
})
