import { Controller } from 'stimulus'

export class AnchorController extends Controller {
  connect () {
    this.autosuggestController = this.element.autosuggestController
    this.containerController = this.element.containerController
    this.element.controller = this
    this.element.setAttribute('class', this.cssClass)
    this.element.classList.add(this.identifier)
    this.element.href = '#'

    if (this.text.length) {
      const textElement = document.createElement('span')
      textElement.setAttribute('class', this.textCssClass)
      textElement.classList.add('text')
      textElement.innerText = this.text
      this.element.appendChild(textElement)
    }

    if (this.value.length) {
      const valueElement = document.createElement('span')
      valueElement.setAttribute('class', this.valueCssClass)
      valueElement.classList.add('value')
      valueElement.innerText = this.value
      this.element.appendChild(valueElement)
    }
  }

  get value () {
    return this.optionElement.value.trim()
  }

  get text () {
    return this.optionElement.innerText.trim()
  }

  get normalizedValue () {
    return `${this.text} ${this.value}`.toLowerCase()
  }

  get optionElement () {
    return this.element.optionElement
  }

  get cssClass () {
    return this.element.autosuggestController.data.get('optionClass')
  }

  get activeCssClass () {
    return this.element.autosuggestController.data.get('optionActiveClass')
  }

  get textCssClass () {
    return this.autosuggestController.data.get('optionTextClass')
  }

  get valueCssClass () {
    return this.autosuggestController.data.get('optionValueClass')
  }
}
