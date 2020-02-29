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
    this.containerElement.dispatchEvent(
      new CustomEvent('hopsoft:autosuggest:show')
    )
  }

  blur () {
    this.containerElement.dispatchEvent(
      new CustomEvent('hopsoft:autosuggest:hide')
    )
  }

  keydown (event) {
    switch (event.key) {
      case 'Escape':
        this.blur()
        break
      case 'ArrowDown':
        this.containerElement.dispatchEvent(
          new CustomEvent('hopsoft:autosuggest:activate', {
            detail: { direction: 'down' }
          })
        )
        break
      case 'ArrowUp':
        this.containerElement.dispatchEvent(
          new CustomEvent('hopsoft:autosuggest:activate', {
            detail: { direction: 'up' }
          })
        )
        break
      case 'Enter':
        const { activeAnchorElement } = this.containerElement.controller
        if (activeAnchorElement)
          this.value = activeAnchorElement.controller.value
        break
    }
  }

  input (event) {
    this.focus()
    if (this.value.length) {
      this.containerElement.dispatchEvent(
        new CustomEvent('hopsoft:autosuggest:filter', {
          detail: { query: this.value.toLowerCase() }
        })
      )
    }
  }

  get value () {
    return this.element.value.trim()
  }

  set value (val) {
    return (this.element.value = val.trim())
  }

  get actions () {
    const list = new Set((this.element.dataset.action || '').split(' '))
    list.add(`blur->${this.identifier}#blur`)
    list.add(`focus->${this.identifier}#focus`)
    list.add(`input->${this.identifier}#input`)
    list.add(`keydown->${this.identifier}#keydown`)
    return Array.from(list).filter(a => a.length)
  }

  get layout () {
    return this.element.getBoundingClientRect()
  }
}
