/**
 * Modals
 */
const Modal = (function () {
  const Constructor = function (selector) {
    const publicAPIs = {}

			const show = function() {
				this.elem.classList.toggle('is-active')
				this.on_show()
      }

      const close = function() {
				this.elem.classList.toggle('is-active')
				this.on_close()
      }

      const close_data = function() {
          var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
          var that = this
          modalClose.forEach(function (e) {
              e.addEventListener("click", function () {

                  that.elem.classList.toggle('is-active')

                  var event = new Event('modal:close')

                  that.elem.dispatchEvent(event)
              })
          })
      }

    //   on_show() {
    //       var event = new Event('modal:show')

    //       this.elem.dispatchEvent(event)
    //   }

    //   on_close() {
    //       var event = new Event('modal:close')

    //       this.elem.dispatchEvent(event)
    //   }

    //   addEventListener(event, callback) {
    //       this.elem.addEventListener(event, callback)
    //   }
    // }

    var modalButton = document.querySelector(modalButton)

    // btn.addEventListener("click", function () {
    //   mdl.show()
    // })

    // mdl.addEventListener('modal:show', function () {
    //   console.log("opened")
    // })

    // mdl.addEventListener("modal:close", function () {
    //   console.log("closed")
    // })
    publicAPIs.init = function () {
			const modal = document.querySelector(selector)

		}

    return publicAPIs
  }
  publicAPIs.init()

  return Constructor
})()
