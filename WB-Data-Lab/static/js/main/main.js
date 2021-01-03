import Workshops from '../functions/workshops.js'
import Accordions from '../functions/accordions.js'
import Slider from '../functions/slider.js'

document.addEventListener('DOMContentLoaded', function () {

	const leftAccordion = new Accordions('[data-accordion="left"]')
	const rightAccordion = new Accordions('[data-accordion="right"]')

	const slider = new Slider('.teams .container .slider')
	const workshopPartial = new Workshops('.workshops-container li', { isHomePage: true })
	
})
