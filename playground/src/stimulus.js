import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import * as controllers from '@hopsoft/controllers'

const application = Application.start()
application.register('activity', controllers.ActivityController)
application.register('autosuggest', controllers.AutosuggestController)
application.register('copy', controllers.CopyController)
application.register('dismissible', controllers.DismissibleController)
application.register('prefetch', controllers.PrefetchTurbolinksController)
