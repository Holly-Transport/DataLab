const Slider = (function () {
	'use strict'

	const Constructor = function(selector) {
		const publicAPIs = {}

		// Variables
		//
		const slider = document.querySelector(selector)
		let teamLogos = slider.querySelectorAll('*')
		//
		// Methods
		//
		const removeLogosFromDOM = function(array) {
			const logos = []
	
			array.forEach(logo => {
				logo.remove()
				logos.push(logo)
				return logos
			})
			return logos
		}

		const sliceArrayBySize = (array, size) => {
			if (array.length <= size) {
				return [array]
			}
			return[array.slice(0, size), ...sliceArrayBySize(array.slice(size), size)]
		}
	
		const addLogosWrapper = function(logoArrays) {
			let imageContainers = logoArrays.map(slicedArray => {
				let imageContainer = document.createElement('div')
				imageContainer.className = "slider-wrapper"
	
				slicedArray.map(element=> {
					return imageContainer.appendChild(element)
				})
				return imageContainer
			})
			return imageContainers
		}
	
		const injectWrappedImages = function(imageWrappers, selector) {
			const slider = document.querySelector(selector)
			imageWrappers.forEach(wrapper => {
				slider.appendChild(wrapper)
			})
		}
	
		const runSlider = function() {
			setInterval(function(selector) {
				selector.children.forEach(sliderWrapper => {
					console.log(sliderWrapper)
				})
			}, 2000)
		}



		publicAPIs.init = function () {
			if (!selector || typeof selector !== 'string') {
				throw new Error ('Please provide a valid selector')
			}

			const logos = removeLogosFromDOM(teamLogos)
			const slicedLogoArrays = sliceArrayBySize(logos, 5)
			const wrappedImageContainers = addLogosWrapper(slicedLogoArrays)
			injectWrappedImages(wrappedImageContainers, selector)
			// runSlider(selector)
		}
	
	
		publicAPIs.init()
		// Return the Public APIs
		return publicAPIs
	}

	// Return the Constructor
	return Constructor
})()

export default Slider