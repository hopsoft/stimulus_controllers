import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import AutosuggestController from 'autosuggest_controller/src'
import CopyController from 'copy_controller/src'

const application = Application.start()
application.register('autosuggest', AutosuggestController)
application.register('copy', CopyController)
