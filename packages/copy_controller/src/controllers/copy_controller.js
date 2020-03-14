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
    if (this.copiedContent === content || this.copiedDuration === 0) return
    this.triggerTarget.innerHTML = this.copiedContent
    setTimeout(() => (this.triggerTarget.innerHTML = content), 2000)
  }

  get value () {
    return this.sourceTarget.value
  }

  get copiedContent () {
    return this.element.dataset.copiedContent || 'Copied...'
  }

  get copiedDuration () {
    return Number(this.element.dataset.copiedDuration || 2) * 1000
  }
}
