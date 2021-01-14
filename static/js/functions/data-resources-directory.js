document.addEventListener('DOMContentLoaded', function() {
	const processInnerHTML = function(string) {
		if (string) {
			return ['.', ...Array.from(string.toLowerCase().replaceAll(" ", "-"))].join("")
		}
	}

	const secondaryButtonsIsotopeInstance = new Isotope( '.secondary-filters', {
		itemSelector: '.button-container',
		layoutMode: 'fitRows',
		percentPosition: true
	})

	window.secondaryButtonsIsotopeInstance = secondaryButtonsIsotopeInstance

	const filters = {}
	const mainButtons = document.querySelectorAll('.primary-button-filters .button')

	mainButtons.forEach(button => {
		button.addEventListener('click', (event) => {
			const changedSel = event.target
			const changedSelGroup = 'primary-button'
			filters[changedSelGroup] = changedSel.getAttribute('value-group')
			const filterValue = filters['primary-button']
			Array.from(secondaryButtonsIsotopeInstance.element.children).forEach(button => {
				button.classList.remove('hidden')
			})
			secondaryButtonsIsotopeInstance.arrange({ filter: filterValue })
		})
	})
	// Begin activation of second set of buttons.
		const mainCardsIsotopeInstance = new Isotope( '.card-grid', {
			itemSelector: '.grid-card-item',
			layoutMode: 'fitRows',
			percentPosition: true
	})

	window.mainCardsIsotopeInstance = mainCardsIsotopeInstance
	const secondaryButtons = document.querySelectorAll('.secondary-filters .button-container')
	secondaryButtons.forEach(button => {
		button.addEventListener('click', (event) => {
			const changedSel = event.target
			const changedSelGroup = 'secondary-button'
			filters[changedSelGroup] = changedSel.innerHTML
			const filterValue = processInnerHTML(filters['secondary-button'])
			const cardGrid = document.querySelector('.card-grid')
			cardGrid.classList.remove('hidden')

			Array.from(mainCardsIsotopeInstance.element.children).forEach(card => {
				card.querySelectorAll('.grid-card-item .hidden').forEach(cardItem => {
					cardItem.classList.remove('hidden')
					cardItem.classList.add('card-display-flex')
					// cardItem.querySelectorAll('.hidden').forEach(cardContent => {
					// 	cardContent.classList.remove('hidden')
					// })
				})
				card.classList.remove('hidden')
				card.classList.add('card-item-display-flex')
			})
			mainCardsIsotopeInstance.arrange({ filter: filterValue })
		})
	})
})