import { Controller } from 'stimulus'

export class ContainerController extends Controller {
  connect () {
    this.activeIndex = -1
    this.element.controller = this
    this.element.setAttribute('class', this.cssClass)
    this.element.classList.add(this.identifier)
    this.element.style.position = 'absolute'
    this.element.style.minHeight = '100px'
    this.element.style.overflowY = 'scroll'
    this.element.style.overflowX = 'hidden'
    this.element.hidden = true
    this.datalistElement.querySelectorAll('option').forEach(option => {
      const a = document.createElement('a')
      a.autosuggestController = this.autosuggestController
      a.containerController = this
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

  filter (query) {
    query = query.toLowerCase().trim()
    this.activeIndex = -1
    this.anchorElements.forEach(a => {
      if (a.controller.normalizedValue.includes(query)) {
        a.style.removeProperty('display')
      } else {
        a.style.display = 'none'
      }
    })
  }

  find (value) {
    return this.anchorElements.find(a => a.controller.value === value)
  }

  highlight () {
    this.anchorElements.forEach(a =>
      a.classList.remove(a.controller.activeCssClass)
    )
    this.activeAnchorElement.classList.add(
      this.activeAnchorElement.controller.activeCssClass
    )
    this.activeAnchorElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end'
    })
  }

  highlightNext () {
    this.activeIndex++
    if (this.activeIndex > this.visibleAnchorElements.length - 1)
      this.activeIndex = 0
    this.highlight()
  }

  highlightPrevious () {
    this.activeIndex--
    if (this.activeIndex < 0)
      this.activeIndex = this.visibleAnchorElements.length - 1
    this.highlight()
  }

  reset () {
    this.anchorElements.forEach(a => a.style.removeProperty('display'))
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

  get cssClass () {
    return this.autosuggestController.data.get('containerClass')
  }
}
