# Stimulus Controllers

## Project Structure

1. `packages` - the controller library

    Each subdirectory defines a controller

2. `packages/playground` - a place to test the controllers in the library

    Test pages are created at `packages/playground/dist/COMPONENT_NAME.html`

## Setup & Publishing

This project publishes NPM packages with [Lerna](https://github.com/lerna/lerna).

```sh
yarn
lerna bootstrap
lerna changed
lerna publish
```

## Quick Start

```sh
git clone git@github.com:hopsoft/stimulus_controllers.git
cd stimulus_controllers
yarn
lerna bootstrap
cd packages/playground && yarn start
```

### Tmuxinator

1. `gem install tmuxinator`

1. `cp .tmuxinator.example.yml .tmuxinator.yml`

1. Edit `.tmuxinator.yml`

1. `bin/tmuxinator`
