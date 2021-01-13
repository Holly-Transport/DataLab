document.addEventListener('DOMContentLoaded', function() {
	const processInnerHTML = function(string) {
		if (string) {
			console.log(string)
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
	// console.log('Main Buttons',mainButtons)

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
	// console.log('Secondary Buttons', secondaryButtons)
	secondaryButtons.forEach(button => {
		button.addEventListener('click', (event) => {
			// console.log(event)
			const changedSel = event.target
			console.log('Changed Selector', changedSel)
			const changedSelGroup = 'secondary-button'
			filters[changedSelGroup] = changedSel.innerHTML
			// console.log('Filters:', filters)
			const filterValue = processInnerHTML(filters['secondary-button'])
			console.log('Filter Value:', filterValue)
			const cardGrid = document.querySelector('.card-grid')
			cardGrid.classList.remove('hidden')

			Array.from(mainCardsIsotopeInstance.element.children).forEach(card => {
				console.log(card)
				card.querySelectorAll('.grid-card-item .hidden').forEach(cardItem => {
					cardItem.classList.remove('hidden')
					cardItem.classList.add('card-display-flex')
					// cardItem.querySelectorAll('.hidden').forEach(cardContent => {
					// 	cardContent.classList.remove('hidden')
					// })
				})
				card.classList.remove('hidden')
				card.classList.add('card-item-display-flex')
				console.log(card)
			})
			mainCardsIsotopeInstance.arrange({ filter: filterValue })
		})
	})
})