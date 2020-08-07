import { Controller } from 'stimulus'

export class CopyController extends Controller {
  static targets = ['source', 'trigger']

  copy (event) {
    event.preventDefault()
    this.value = this.sourceTarget.value || this.sourceTarget.innerHTML
    if (!this.value.length) return
    if (this.disable) this._toggleDisabled()
    this._doCopy()
  }

  showCopied () {
    const content = this.triggerTarget.innerHTML
    if (this.content === content || this.duration === 0) {
      if (this.disable) this._toggleDisabled()
      return
    }
    this.triggerTarget.innerHTML = this.content
    setTimeout(() => {
      this.triggerTarget.innerHTML = content
      if (this.disable) this._toggleDisabled()
    }, this.duration)
  }

  _doCopy () {
    let range
    if (this.sourceTarget.value) {
      this.sourceTarget.select()
    } else {
      range = document.createRange()
      range.selectNode(this.sourceTarget)
      window.getSelection().empty()
      window.getSelection().addRange(range)
    }

    document.execCommand('copy')
    this.showCopied()

    if (this.sourceTarget.value) {
      this.sourceTarget.value = this.value
      this.sourceTarget.focus()
    } else {
      window.getSelection().removeAllRanges()
    }
  }

  _toggleDisabled () {
    this.triggerTarget.toggleAttribute('disabled', !this.triggerTarget.disabled)
  }

  get content () {
    return this.data.get('content') || 'Copied...'
  }

  get duration () {
    return Number(this.data.get('duration') || 2000)
  }

  get disable () {
    return this.data.has('disable')
  }
}
