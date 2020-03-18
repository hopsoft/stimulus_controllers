import { Controller } from 'stimulus'

export class CopyController extends Controller {
  static targets = ['source', 'trigger']

  copy (event) {
    event.preventDefault()
    const value = this.value
    if (!value.length) return
    this.sourceTarget.select()
    document.execCommand('copy')
    this.showCopied()
    this.sourceTarget.value = ''
    this.sourceTarget.value = value
    this.sourceTarget.focus()
  }

  showCopied () {
    const content = this.triggerTarget.innerHTML
    if (this.content === content || this.duration === 0) return
    this.triggerTarget.innerHTML = this.content
    setTimeout(() => (this.triggerTarget.innerHTML = content), this.duration)
  }

  get value () {
    return this.sourceTarget.value
  }

  get content () {
    return this.data.get('content') || 'Copied...'
  }

  get duration () {
    return Number(this.data.get('duration') || 2000)
  }
}
