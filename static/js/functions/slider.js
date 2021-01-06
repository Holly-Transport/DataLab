const Slider = function () {
  "use strict"

  const Constructor = function (selector) {
    console.log(selector)
    const publicAPIs = {}
    // Methods

    publicAPIs.init = function (selector) {
      if (!selector || typeof selector !== "string") {
        throw new Error("Please provide a valid selector")
      }

      const glider = new Glider(document.querySelector(".glider"), {
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: true,
        dots: ".dots",
      })

      let currentPage = 0
      const pageNumber = glider.dots.childNodes.length

      setInterval(function () {
        if (currentPage === pageNumber) {
          currentPage = 0
        }
        glider.scrollItem(currentPage * 5)
        currentPage++
      }, 2000)
    }
    console.log(selector)
    publicAPIs.init(selector)
    // Return the Public APIs
    return publicAPIs
  }

  // Return the Constructor
  return Constructor
}

export default Slider
