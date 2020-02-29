import { Controller } from 'stimulus'

export class ContainerController extends Controller {
  connect () {
    this.element.classList.add(this.identifier)
    this.element.setAttribute('data-action', this.actions.join(' '))
    this.element.style.position = 'absolute'
    this.element.style.minHeight = '100px'
    this.element.style.overflowY = 'scroll'
    this.element.style.overflowX = 'hidden'
    this.element.hidden = true
    this.datalistElement.querySelectorAll('option').forEach(option => {
      const a = document.createElement('a')
      a.optionElement = option
      a.setAttribute('data-controller', 'hopsoft-autosuggest-anchor')
      this.element.appendChild(a)
    }, this)
  }

  show () {
    const { layout } = this.autosuggestController
    this.element.style.minWidth = `${layout.width}px`
    this.element.style.left = `${layout.left}px`
    this.element.style.top = `${layout.top + layout.height}px`
    this.element.hidden = false
  }

  hide () {
    this.element.hidden = true
  }

  get autosuggestController () {
    return this.element.autosuggestController
  }

  get datalistElement () {
    return this.autosuggestController.datalistElement
  }

  get actions () {
    return [
      `hopsoft:autosuggest:show->${this.identifier}#show`,
      `hopsoft:autosuggest:hide->${this.identifier}#hide`
    ]
  }
}
