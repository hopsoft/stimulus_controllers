import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import AutosuggestController from '@hopsoft/autosuggest-controller'
import CopyController from '@hopsoft/copy-controller'

const application = Application.start()
application.register('autosuggest', AutosuggestController)
application.register('copy', CopyController)
