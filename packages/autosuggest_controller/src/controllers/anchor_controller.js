import { Controller } from 'stimulus'

export class AnchorController extends Controller {
  connect () {
    this.element.controller = this
    this.element.classList.add(this.identifier)
    this.element.setAttribute('data-action', this.actions.join(' '))
    this.element.href = '#'

    if (this.text.length) {
      const textElement = document.createElement('span')
      textElement.classList.add('text')
      textElement.innerText = this.text
      this.element.appendChild(textElement)
    }

    if (this.value.length) {
      const valueElement = document.createElement('span')
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

  get actions () {
    return []
  }
}
