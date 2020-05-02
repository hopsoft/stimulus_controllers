# Dismissible Controller

Dismiss an alert and simultaneously send a XHR request, for example a `last_seen` timestamp.

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
     data-dismissible-body="{&quot;user&quot;:{ &quot;last_viewed_at&quot;: &quot;2020-05-01T00:00:00&quot;}}"
     data-dismissible-method="PUT"
     Alert...
</div>
```

### [Configuration](https://stimulusjs.org/handbook/managing-state)

| Attribute                  |          | Default | Example                                             | Description                                                |
| -------------------------- | -------- | ------- | --------------------------------------------------- | ---------------------------------------------------------- |
| `data-dismissible-invisible-class` | | "hidden"      | `data-dismissible-invisible-class="opacity-0"` | The class added to the controller element after dismissing |
| `data-dismissible-duration` | | 200 | `data-dismissible-duration="500"` | The amount of time to close the element after which the request is sent. |
| `data-dismissible-url` | required | | `data-dismissible-url="/my_endpoint"` | The URL to fetch |
| `data-dismissible-method` | | "PUT" | `data-dismissible-method="POST"` | The HTTP method to use in the request |
| `data-dismissible-body` | | "" | `data-dismissible-body="{&quot;user&quot;:{ &quot;last_viewed_at&quot;: &quot;2020-05-01T00:00:00&quot;}}"` | The request body as JSON, has to be HTML-escaped. |
