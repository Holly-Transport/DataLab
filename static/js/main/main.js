import Workshops from '../functions/workshops.js'
import Accordions from '../functions/accordions.js'
import Slider from '../functions/slider.js'

document.addEventListener('DOMContentLoaded', function () {

	const leftAccordion = new Accordions('[data-accordion="left"]')
	const rightAccordion = new Accordions('[data-accordion="right"]')

	
	const glider = new Glider(document.querySelector('.glider'), {
		slidesToShow: 5,
		slidesToScroll: 5,
		draggable: true,
		dots: ".dots",
		arrows: {
			prev: ".glider-prev",
			next: ".glider-next",
		},
	})

	const slider = new Slider('.glider')
	// setInterval(activateSlider(glider), 2000)


	// console.log(slider.activateSlider(glider))

	const workshopPartial = new Workshops('.workshops-container li', { isHomePage: true })
	
})
