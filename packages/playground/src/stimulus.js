import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import AutosuggestController from '@hopsoft/autosuggest-controller/src'
import CopyController from '@hopsoft/copy-controller/src'

const application = Application.start()
application.register('autosuggest', AutosuggestController)
application.register('copy', CopyController)
