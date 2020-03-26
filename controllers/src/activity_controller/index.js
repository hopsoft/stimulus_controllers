import { Controller } from 'stimulus'

export class ActivityController extends Controller {
  connect () {
    this.show = this._show.bind(this)
    this.hide = this._hide.bind(this)

    this.showEventNames.forEach(eventName => {
      document.addEventListener(eventName, this.show)
    })

    this.hideEventNames.forEach(eventName =>
      document.addEventListener(eventName, this.hide)
    )
  }

  disconnect () {
    this.showEventNames.forEach(eventName =>
      document.removeEventListener(eventName, this.show)
    )
    this.hideEventNames.forEach(eventName =>
      document.removeEventListener(eventName, this.hide)
    )
  }

  _show () {
    this.element.hidden = false
  }

  _hide () {
    this.element.hidden = true
  }

  get showEventNames () {
    return this.data.get('showEvent').split(' ')
  }

  get hideEventNames () {
    return this.data.get('hideEvent').split(' ')
  }
}
