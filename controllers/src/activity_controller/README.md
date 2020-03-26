# Activity Controller

Show and hide an element based on DOM events.
Typically used to show activity from things like [xhr requests](https://en.wikipedia.org/wiki/XMLHttpRequest).

## Installation

```sh
yarn add @hopsoft/controllers
```

## Initialization

```js
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import { ActivityController } from '@hopsoft/controllers' // <---

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('activity', ActivityController) // <---
```

## [Controller](https://stimulusjs.org/reference/controllers)

```html
<div data-controller="activity"
  data-activity-show-event="stimulus-reflex:before"
  data-activity-hide-event="stimulus-reflex:after">
  Spinner...
</div>
```

### [Configuration](https://stimulusjs.org/handbook/managing-state)

| Attribute                  |          | Default | Example                                             | Description                                                |
| -------------------------- | -------- | ------- | --------------------------------------------------- | ---------------------------------------------------------- |
| `data-activity-show-event` | required | ""      | `data-activity-show-event="stimulus-reflex:before"` | Space separated list of events to listen for on `Document` |
| `data-activity-hide-event` | required | ""      | `data-activity-hide-event="stimulus-reflex:after"`  | Space separated list of events to listen for on `Document` |
