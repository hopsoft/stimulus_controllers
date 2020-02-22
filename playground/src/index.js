import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import autosuggest from 'autosuggest_controller/src'

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
application.register('autosuggest', autosuggest)
