import { Controller } from 'stimulus'

export class AutosuggestController extends Controller {
  connect () {
    document.dispatchEvent(
      new CustomEvent('hopsoft:autosuggest:connect', {
        detail: { controller: this }
      })
    )

    this.datalistElement = this.element.list
    this.element.removeAttribute('list')
    this.element.setAttribute('data-action', this.actions.join(' '))

    this.containerElement = document.createElement('div')
    this.containerElement.autosuggestController = this
    this.containerElement.setAttribute(
      'data-controller',
      'hopsoft-autosuggest-container'
    )
    document.body.appendChild(this.containerElement)

    //this.element.dataset.action = this.actions.join(' ')
    //this.highlightedIndex = -1
  }
  //highlightOption (event) {
  //const length = this.visibleOptions.length
  //if (length === 0) return (this.highlightedIndex = -1)
  //switch (event.key) {
  //case 'ArrowDown':
  //this.highlightedIndex++
  //if (this.highlightedIndex >= length) this.highlightedIndex = 0
  //break
  //case 'ArrowUp':
  //this.highlightedIndex--
  //if (this.highlightedIndex < 0) this.highlightedIndex = length - 1
  //break
  //case 'Enter':
  //this.element.value = this.highlightedOption.dataset.value
  //this.element.blur()
  //return
  //case 'Tab':
  //case 'Escape':
  //this.highlightedIndex = -1
  //this.element.blur()
  //return
  //}
  //this.options.forEach(o => {
  //o.classList.remove('active')
  //o.innerText = o.dataset.text
  //})
  //this.highlightedOption.classList.add('active')
  //this.highlightedOption.innerText = `→ ${this.highlightedOption.dataset.text}`
  //this.highlightedOption.scrollIntoView({ block: 'center' })
  //}
  //search () {
  //this.highlightedIndex = -1
  //this.options.forEach(
  //o => (o.hidden = !o.dataset.normalizedValue.includes(this.query))
  //)
  //this.show()
  //}
  //get query () {
  //return this.element.value.toLowerCase()
  //}
  //get options () {
  //return Array.from(this.list.querySelectorAll('[data-behavior="option"]'))
  //}
  //get visibleOptions () {
  //return this.options.filter(o => !o.hidden)
  //}
  //get hiddenOptions () {
  //return this.options.filter(o => o.hidden)
  //}
  //get highlightedOption () {
  //return this.visibleOptions[this.highlightedIndex]
  //}

  focus (event) {
    this.containerElement.dispatchEvent(
      new CustomEvent('hopsoft:autosuggest:show')
    )
  }

  blur (event) {
    this.containerElement.dispatchEvent(
      new CustomEvent('hopsoft:autosuggest:hide')
    )
  }

  get actions () {
    const list = new Set((this.element.dataset.action || '').split(' '))
    list.add(`focus->${this.identifier}#focus`)
    list.add(`blur->${this.identifier}#blur`)

    //list.add(`input->${this.identifier}#search`)
    //list.add(`keydown->${this.identifier}#highlightOption`)

    return Array.from(list).filter(a => a.length)
  }

  get layout () {
    return this.element.getBoundingClientRect()
  }
}
