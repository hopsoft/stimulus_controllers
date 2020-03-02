import { Controller } from 'stimulus'

export class CopyController extends Controller {
  static targets = ['source', 'button']

  copy (event) {
    event.preventDefault()
    if (!this.value.trim().length) return
    this.sourceTarget.select()
    document.execCommand('copy')
    //this.sourceTarget.blur()
    //document.getSelection().removeAllRanges()
    this.showCopied()
  }

  showCopied () {
    const content = this.buttonTarget.innerHTML
    if (this.copiedContent === content || this.copiedDuration === 0) return
    this.buttonTarget.innerHTML = this.copiedContent
    setTimeout(() => (this.buttonTarget.innerHTML = content), 2000)
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
