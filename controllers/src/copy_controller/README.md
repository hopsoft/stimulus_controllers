# Copy Controller

Copies text from `input` and `textarea` elements to the clipboard.

## Installation

```sh
yarn add @hopsoft/controllers
```

## Initialization

```js
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import { CopyController } from '@hopsoft/controllers' // <---

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('copy', CopyController) // <---
```

## [Controller](https://stimulusjs.org/reference/controllers)

```html
<div data-controller="copy" data-copy-content='Copied...' data-copy-duration='1000'>
  <textarea data-target='copy.source'></textarea>
  <button type="button" data-target='copy.trigger' data-action='click->copy#copy'>Copy</button>
</div>
```

### [Targets](https://stimulusjs.org/reference/targets)

| Name      |          | Description                                              |
| --------- | -------- | ------------------------------------------------------------------------ |
| `source`  | required | An input (can be hidden) or textarea that holds the content to be copied |
| `trigger` |          | The button used to perform the copy                                      |


### [Actions](https://stimulusjs.org/reference/actions)

| Name     |          | Description                                                         |
| -------- | -------- | ------------------------------------------------------------------- |
| `copy`   | required | Performs the copy action (typically defined on the `button` target) |

### Events

| Name          | Description                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------|
| `copy:copied` | Fired when the element text has been copied to the clipboard. This is useful for example when displaying a tooltip afterwards. |
|               | `event.detail = { value: this.sourceTarget.value, message: this.content }`                                                     |

### [Configuration](https://stimulusjs.org/handbook/managing-state)

| Attribute             |          | Default     | Description                                                                                             |
| --------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `data-copy-content`   | optional | "Copied..." | Content to show in the button after a copy has been performed                                           |
| `data-copy-duration`  | optional | 2000        | How many milliseconds to show the copied content in the button before reverting to the original content |
| `data-copy-disable`   | optional |             | Presence of this attribute will disable the `triggerTarget` during copying                              |

Copy content can be disabled by setting `data-copy-content=""` or `data-copy-duration="0"`
