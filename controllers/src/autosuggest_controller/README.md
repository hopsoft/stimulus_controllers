# Autosuggest Controller

Fully customizable cross browser typeahead behavior based on the native [datalist element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist).
Similar to solutions like [typeahead.js](https://twitter.github.io/typeahead.js/examples/),
[Select2](https://select2.org), [Chosen](https://harvesthq.github.io/chosen/), and others. This project's only dependency is [Stimulus](https://stimulusjs.org).

## Installation

```sh
yarn add @hopsoft/controllers
```

## Initialization

```js
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import { AutosuggestController } from '@hopsoft/controllers'

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('autosuggest', AutosuggestController)
```

## [Controller](https://stimulusjs.org/reference/controllers)

```html
<input data-controller="autosuggest"
  data-autosuggest-container-class="autosuggest-container"
  data-autosuggest-option-class="autosuggest-option"
  data-autosuggest-option-active-class="active"
  data-autosuggest-option-text-class="autosuggest-text"
  data-autosuggest-option-value-class="autosuggest-value"
  name="email" type="email" list="contacts" multiple>

<datalist id="contacts">
  <option value="abel_pouros@ankunding.co">Abel Pouros</option>
  <option value="adalberto@senger.co">Dr. Adalberto Bergstrom</option>
  <option value="adan.von@schmidt.com">Adan Von</option>
  ...
</datalist>
```

### [Configuration](https://stimulusjs.org/handbook/managing-state)

| Attribute                              |          | Default | Description                               |
| -------------------------------------- | ---------| ------- | ----------------------------------------- |
| `data-autosuggest-container-class`     | optional | ""      | CSS classes for the dropdown container    |
| `data-autosuggest-option-class`        | optional | ""      | CSS classes for suggested options         |
| `data-autosuggest-option-active-class` | optional | ""      | CSS classes for active options            |
| `data-autosuggest-option-text-class`   | optional | ""      | CSS classes for option text               |
| `data-autosuggest-option-value-class`  | optional | ""      | CSS classes for option value              |
