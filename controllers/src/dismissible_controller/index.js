import { Controller } from 'stimulus'

export class DismissibleController extends Controller {
  async dismiss (e) {
    e.preventDefault()

    try {
      if (this.data.has('url')) {
        fetch(this.url, {
          method: this.method,
          credentials: 'same-origin',
          body: this.body
        })
      }
    } catch (e) {
    } finally {
      this.element.classList.add(this.invisibleClass)
      setTimeout(() => {
        this.element.remove()
      }, this.duration)
    }
  }

  get duration () {
    return this.data.get('duration') || 200
  }

  get invisibleClass () {
    return this.data.get('invisibleClass') || 'hidden'
  }

  get url () {
    return this.data.get('url')
  }

  get method () {
    return this.data.get('method') || 'PUT'
  }

  get body () {
    return this.data.get('body') || ''
  }
}
