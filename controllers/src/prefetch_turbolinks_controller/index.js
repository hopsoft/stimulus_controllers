import { Controller } from 'stimulus'

const fetchers = {}
const doc = document.implementation.createHTMLDocument(
  '@hopsoft/prefetch-turbolinks-controller'
)

function fetchPage (url, success) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.setRequestHeader('VND.PREFETCH', 'true')
  xhr.setRequestHeader('Accept', 'text/html')
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status !== 200) return
    success(xhr.responseText)
  }
  xhr.send()
}

function prefetchTurbolink (url) {
  fetchPage(url, responseText => {
    doc.open()
    doc.write(responseText)
    doc.close()
    const snapshot = Turbolinks.Snapshot.fromHTMLElement(doc.documentElement)
    Turbolinks.controller.cache.put(url, snapshot)
  })
}

export class PrefetchTurbolinksController extends Controller {
  prefetch () {
    if (this.prefetched || this.prefetching) return
    fetchers[this.url] = setTimeout(
      (() => prefetchTurbolink(this.url)).bind(this),
      this.hoverTime
    )
  }

  cleanup () {
    clearTimeout(fetchers[this.url])
    fetchers[this.url] = null
  }

  get url () {
    return this.element.getAttribute('href')
  }

  get prefetching () {
    return !!fetchers[this.url]
  }

  get prefetched () {
    return (
      location.href === this.url || Turbolinks.controller.cache.has(this.url)
    )
  }

  get hoverTime () {
    return Number(this.data.get('hoverTime') || 400)
  }
}
