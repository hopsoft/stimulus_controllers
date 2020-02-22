import { Controller } from 'stimulus'

export default class extends Controller {
  connect () {
    const actions = new Set((this.element.dataset.action || '').split(' '))
    const datalist = this.element.list
    let { minWidth, maxWidth, minHeight, maxHeight } = datalist.dataset

    actions.add(`input->${this.identifier}#search`)
    actions.add(`focus->${this.identifier}#search`)
    actions.add(`blur->${this.identifier}#hide`)
    this.element.dataset.action = Array.from(actions)
      .filter(a => a.length)
      .join(' ')

    minWidth = Number(minWidth || 300)
    maxWidth = Number(maxWidth || 600)
    minHeight = Number(minHeight || 300)
    maxHeight = Number(maxHeight || 600)

    this.element.removeAttribute('list')
    this.list = document.createElement('div')
    this.list.style.minWidth = `${minWidth}px`
    this.list.style.maxWidth = `${maxWidth}px`
    this.list.style.minHeight = `${minHeight}px`
    this.list.style.maxHeight = `${maxHeight}px`
    this.list.style.overflowY = 'scroll'
    this.list.hidden = true
    datalist.querySelectorAll('option').forEach(o => {
      const option = document.createElement('div')
      option.dataset.behavior = 'option'
      option.dataset.value = o.value
      option.dataset.text = o.innerText
      option.dataset.normalizedValue = `${o.innerText} ${o.value}`.toLowerCase()
      option.innerText = o.innerText
      this.list.appendChild(option)
    })
    document.body.appendChild(this.list)
  }

  show () {
    this.list.hidden = false
  }

  hide () {
    this.list.hidden = true
  }

  search () {
    this.list.querySelectorAll('[data-behavior="option"]').forEach(o => {
      const hit = o.dataset.normalizedValue.includes(this.query)
      o.hidden = !hit
    })
    this.show()
  }

  get query () {
    return this.element.value.toLowerCase()
  }

  get layout () {
    const position = ({
      left,
      top,
      right,
      bottom,
      width,
      height
    } = this.element.getBoundingClientRect())
    return layout
  }
}
