	const Accordions = (function() {
		'use strict'

		// Methods
		const closeOthers = (current, parent) => {
			let opened = Array.from(parent.querySelectorAll('details[open]'))

			//Close open ones that aren't current accordion
			opened.forEach(accordion => {
				if(accordion == current) return 
				accordion.removeAttribute('open')
			}) 
		}

		const toggle = (event, selector) => {
			// Only run on accordions inside our selector
			let parent = event.target.closest(selector)
			if (!parent) return

			// Only run if accordion is open
			if (!event.target.hasAttribute('open')) return 

			// Close any existing open accordions. 
			closeOthers(event.target, parent)
		}

		/**
		* Create the Constructor object
		*/
		const Constructor = function(selector)   {
			// Variables
	
			const publicAPIs = {}

			const toggleHandler = function(event) {
				toggle(event, selector)
			}

			publicAPIs.init = function() {
				// Check for errors. 
				if (!selector || typeof selector !== 'string') {
					throw new Error ('Please provide a valid selector')
				}
				
				// Listen for when accordions open
				document.addEventListener('toggle', toggleHandler, true)
			}

			// Initialize and return Public APIs
			publicAPIs.init()
			return publicAPIs
		}
	
		// Return the Constructor
		return Constructor
	})()

export default Accordions 