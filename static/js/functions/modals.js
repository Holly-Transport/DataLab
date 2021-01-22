class Modal {
  constructor(modal, target) {
    this.isOpen = false
    this.modal = modal
    this.target = target
    this.closeModal = modal.querySelectorAll("[data-close]")
  }

  open() {
    this.modal.classList.add("show-modal")
    const context = this;
        setTimeout(function () {
            context.animateIn();
        }, 10);
  }
  close() {
    this.animateOut();
        const context = this;
        setTimeout(function () {
            context.modal.classList.remove('show-modal');
        }, 250);
  }

  animateIn() {
    this.modal.classList.add("animate-modal")
  }
  animateOut() {
    this.modal.classList.remove("animate-modal")
  }

  init() {
    const modal = this
    this.target.addEventListener("click", function (e) {
      if (modal.isOpen) {
        modal.close()
      } else {
        modal.open()
      }
    })
    this.closeModal.forEach(function (item) {
      item.addEventListener("click", function (e) {
        modal.close()
      })
    })
  }
}

const modal = new Modal(
  // Grab the modal element
  document.querySelector(".modal"),
  // Grab the element that triggers the modal
  document.querySelector('[data-toggle="modal"]')
)
// Add the event listeners
modal.init()
