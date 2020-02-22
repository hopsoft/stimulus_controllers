# Playground

This project supports in browser manual testing of the Stimulus components defined in `packages`.

## Setup

```sh
cd playground
yarn
```

## Testing

1. Update `playground/src/index.js` to import the desired Stimulus controller.

1. Create an HTML file under `playground/src/html` to test the desired Stimulus controller.

1. Start the dev server.

    ```sh
    cd playground
    yarn run webpack-dev-server
    ```

1. Open the HTML page in a browser.

    ```sh
    open playground/html/example.html
    ```
