import { Controller } from 'stimulus'

export class ContainerController extends Controller {
  connect () {
    this.activeIndex = -1
    this.element.controller = this
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

  filter (event) {
    const { query } = event.detail
    this.activeIndex = -1
    this.anchorElements.forEach(a => {
      if (a.controller.normalizedValue.includes(query)) {
        a.style.removeProperty('display')
      } else {
        a.style.display = 'none'
      }
    })
  }

  activate (event) {
    const { direction } = event.detail
    const max = this.visibleAnchorElements.length - 1

    direction === 'down' ? this.activeIndex++ : this.activeIndex--
    if (this.activeIndex < 0) this.activeIndex = max
    if (this.activeIndex > max) this.activeIndex = 0

    this.anchorElements.forEach(a => a.classList.remove('active'))
    this.activeAnchorElement.classList.add('active')
    this.activeAnchorElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end'
    })
  }

  get anchorElements () {
    return Array.from(this.element.querySelectorAll('a'))
  }

  get visibleAnchorElements () {
    return this.anchorElements.filter(a => a.style.display !== 'none')
  }

  get activeAnchorElement () {
    return this.visibleAnchorElements[this.activeIndex]
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
      `hopsoft:autosuggest:hide->${this.identifier}#hide`,
      `hopsoft:autosuggest:filter->${this.identifier}#filter`,
      `hopsoft:autosuggest:activate->${this.identifier}#activate`
    ]
  }
}
