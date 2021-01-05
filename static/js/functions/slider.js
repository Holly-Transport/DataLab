const Slider = (function () {
  "use strict"

  const Constructor = function (selector) {
    // Variables
    const publicAPIs = {}
		console.log(selector)
    // Methods

    publicAPIs.activateSlider = function (gliderObj) {
			console.log(gliderObj)
			const pageNumber = gliderObj.dots.childNodes.length
			let currentPage = 0

      while (currentPage <= pageNumber - 1) {
          currentPage++
					gliderObj.scrollItem(currentPage, gliderObj.dots.length + 1)
					break
      }
    }

    publicAPIs.init = function () {
      if (!selector || typeof selector !== "string") {
        throw new Error("Please provide a valid selector")
      }
    }

    publicAPIs.init()
    // Return the Public APIs
    return publicAPIs
  }

  // Return the Constructor
  return Constructor
})()

export default Slider
