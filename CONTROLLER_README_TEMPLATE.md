# Controller Name

Brief description

## Installation

```sh
yarn add @hopsoft/example-controller
```

## Initialization

```js
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import ExampleController from '@hopsoft/example-controller' // <---

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('prefetch', ExampleController) // <---
```

## [Controller](https://stimulusjs.org/reference/controllers)

```html
<div data-controller="controller"></div>
```

Friendly summary

### [Targets](https://stimulusjs.org/reference/targets)

| Name      |                   | Example                           | Description         |
| --------- | ----------------- | --------------------------------- | ------------------- |
| `target`  | required/optional | `data-target="controller.target"` | Describe the target |

### [Actions](https://stimulusjs.org/reference/actions)

| Name      |                   | Example                           | Description         |
| --------- | ----------------- | --------------------------------- | ------------------- |
| `action`  | required/optional | `data-action="controller#action"` | Describe the action |

### [Configuration](https://stimulusjs.org/handbook/managing-state)

| Attribute              |                   | Default | Example                        | Description            |
| ---------------------- | ----------------- | ------- | ------------------------------ | ---------------------- |
| `data-controller-attr` | required/optional | `...`   | `data-controller-attr="value"` | Describe the attribute |
