import { AnchorController } from './anchor_controller'
import { ContainerController } from './container_controller'
import { AutosuggestController } from './autosuggest_controller'

function registerController (app, id, controller) {
  if (app.controllers.find(c => c.identifier === id)) return
  return app.register(id, controller)
}

document.addEventListener('hopsoft:autosuggest:connect', event => {
  const { application } = event.detail.controller
  registerController(
    application,
    'hopsoft-autosuggest-anchor',
    AnchorController
  )
  registerController(
    application,
    'hopsoft-autosuggest-container',
    ContainerController
  )
})

export { AutosuggestController }
