import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import {
  AutosuggestController,
  CopyController,
  PrefetchTurbolinksController
} from '@hopsoft/controllers'

const application = Application.start()
application.register('autosuggest', AutosuggestController)
application.register('copy', CopyController)
application.register('prefetch', PrefetchTurbolinksController)
