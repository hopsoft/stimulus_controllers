# Autosuggest Controller

Brief description...

## Quick Start

```sh
yarn add @hopsoft/autosuggest-controller
```

```js
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import AutosuggestController from '@hopsoft/autosuggest-controller'

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('autosuggest', AutosuggestController)
```

```html
usage
```

## Usage

Friendly summary...

### Targets

Targets are child elements identified by setting:

```
data-target="controller.target"
```

| Name      |                   | Description            |
| --------- | ----------------- | ---------------------- |
| `target`  | required/optional | Describe the target... |

### Actions

Actions are behaviors that can be triggered and are identified by setting:

```
data-action="controller#action"
```

| Name      |                   | Description            |
| --------- | ----------------- | ---------------------- |
| `action`  | required/optional | Describe the action... |

### Configuration

| Attribute           |                   | Default | Description               |
| ------------------- | ----------------- | ------- | ------------------------- |
| `data-controller-?` | required/optional | "..."   | Describe the attribute... |
