import { Controller } from 'stimulus'

export class AutosuggestController extends Controller {
  connect () {
    document.dispatchEvent(
      new CustomEvent('hopsoft:autosuggest:connect', {
        detail: { controller: this }
      })
    )

    this.element.controller = this
    this.element.setAttribute('data-action', this.actions.join(' '))

    this.datalistElement = this.element.list
    this.element.removeAttribute('list')

    this.containerElement = document.createElement('div')
    this.containerElement.autosuggestController = this
    this.containerElement.setAttribute(
      'data-controller',
      'hopsoft-autosuggest-container'
    )
    document.body.appendChild(this.containerElement)
  }

  focus () {
    this.containerElement.controller.reset()
    this.containerElement.controller.show()
  }

  blur (event) {
    setTimeout(() => this.containerElement.controller.hide(), 25)
  }

  keydown (event) {
    switch (event.key) {
      case 'Escape':
        this.blur()
        break
      case 'ArrowDown':
        this.containerElement.controller.highlightNext()
        break
      case 'ArrowUp':
        this.containerElement.controller.highlightPrevious()
        break
      case 'Enter':
        event.preventDefault()
        this.element.dispatchEvent(
          new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            code: 'Tab',
            key: 'Tab',
            keyIdentifier: 'Tab',
            keyCode: 9,
            which: 9
          })
        )
        break
      case 'Tab':
        const { activeAnchorElement } = this.containerElement.controller
        if (activeAnchorElement) {
          const values = this.values
          values.pop()
          this.values = [...values, activeAnchorElement.controller.value]
        }
        break
      case 'Backspace':
        if (this.value === '') {
          this.value = ''
          this.containerElement.controller.reset()
        } else if (this.containerElement.controller.find(this.lastValue)) {
          event.preventDefault()
          this.values = this.values.slice(0, -1)
        }
        break
    }
  }

  input (event) {
    this.focus()
    if (this.value.length)
      this.containerElement.controller.filter(this.values.pop())
  }

  click (event) {
    const anchor = event.target.closest(
      '[data-controller="hopsoft-autosuggest-anchor"]'
    )
    if (anchor) this.values = [...this.values, anchor.controller.value]
  }

  get value () {
    return this.element.value.trim()
  }

  set value (val) {
    return (this.element.value = val.trim())
  }

  get values () {
    return this.element.value.split(',').map(v => v.trim())
  }

  set values (vals) {
    if (this.element.multiple)
      return (this.value = vals
        .map(v => v.trim())
        .filter(v => v.length)
        .join(','))

    this.value = vals.pop()
  }

  get lastValue () {
    return this.values.pop()
  }

  get actions () {
    const list = new Set((this.element.dataset.action || '').split(' '))
    list.add(`blur->${this.identifier}#blur`)
    list.add(`focus->${this.identifier}#focus`)
    list.add(`input->${this.identifier}#input`)
    list.add(`keydown->${this.identifier}#keydown`)
    list.add(`click@document->${this.identifier}#click`)
    return Array.from(list).filter(a => a.length)
  }

  get layout () {
    return this.element.getBoundingClientRect()
  }
}
