# Dismissible Controller

## Installation

```sh
yarn add @hopsoft/controllers
```

## Initialization

```js
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import { DismissibleController } from '@hopsoft/controllers' // <---

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('dismissible', DismissibleController) // <---
```

## [Controller](https://stimulusjs.org/reference/controllers)

```html
<div data-controller="dismissible"
     data-dismissible-invisible-class="opacity-0"
     data-dismissible-duration="200"
     data-dismissible-url="/user"
     data-dismissible-property="last_viewed"
     data-dismissible-value=""
     data-dismissible-method="PUT"
     Alert...
</div>
```

### [Configuration](https://stimulusjs.org/handbook/managing-state)

| Attribute                  |          | Default | Example                                             | Description                                                |
| -------------------------- | -------- | ------- | --------------------------------------------------- | ---------------------------------------------------------- |
| `data-activity-show-event` | required | ""      | `data-activity-show-event="stimulus-reflex:before"` | Space separated list of events to listen for on `Document` |
| `data-activity-hide-event` | required | ""      | `data-activity-hide-event="stimulus-reflex:after"`  | Space separated list of events to listen for on `Document` |
