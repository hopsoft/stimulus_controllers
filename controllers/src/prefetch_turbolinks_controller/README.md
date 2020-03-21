# Prefetch Turbolinks Controller

Speed up your [Turbolinks](https://github.com/turbolinks/turbolinks) website/app by pre-fetching
important links whenever users hover over them.

## Installation

```sh
yarn add @hopsoft/prefetch-turbolinks-controller
```

## Initialization

```js
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import PrefetchTurbolinksController from '@hopsoft/prefetch-turbolinks-controller' // <---

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('prefetch', PrefetchTurbolinksController) // <---
```

## [Controller](https://stimulusjs.org/reference/controllers)

```html
<a href="https://example.com"
  data-controller="prefetch"
  data-prefetch-hover-time="200"
  data-action="mouseenter->prefetch#prefetch mouseleave->prefetch#cleanup">
  Click Me
</a>
```

### [Actions](https://stimulusjs.org/reference/actions)

| Name       |          | Example                         | Description                 |
| ---------- | -------- | ------------------------------- | --------------------------- |
| `prefetch` | required | `mouseenter->prefetch#prefetch` | Prefetches the link's URL   |
| `cleanup`  | required | `moustleave->prefetch#cleanup`  | Cleans up prefetch activity |

### [Configuration](https://stimulusjs.org/handbook/managing-state)

| Attribute                  |          | Default | Description                                |
| -------------------------- | -------- | ------- | ------------------------------------------ |
| `data-prefetch-hover-time` | optional | `400`   | How long to wait before prefeching the URL |
