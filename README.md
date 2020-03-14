# Stimulus Controllers

## Project Structure

1. `packages` - the controller library

    Each subdirectory defines a controller

2. `packages/playground` - a place to test the controllers in the library

    Test pages are created at `packages/playground/dist/COMPONENT_NAME.html`

## Quick Start

```sh
git clone git@github.com:hopsoft/stimulus_controllers.git
cd stimulus_controllers
yarn
lerna bootstrap
cd packages/playground && yarn start
```
