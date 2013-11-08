# Export
module.exports = (spawnDocpad) ->

		# For the fixed/flaoting iconmonstr bar.
		spawnDocpad: (port) ->

			console.log "DocPad init."

			#
			#	Swift.Menus.getMenu('admin').addChild(DocPadMenu);
			#
			#	Swift.Backend.getGroup('admin')
			#	.addPage(plugin.docpadPage);
			#			

			# Create Server and Express Application
			express = require("express")
			http = require("http")
			app = express()
			server = http.createServer(app).listen(port)

			# Add our Application Middlewares
			app.use app.router

			# Add DocPad to our Application
			docpadInstanceConfiguration =

				# Give it our express application and http server
				serverExpress: app
				serverHttp: server
	
				# Tell it not to load the standard middlewares (as we handled that above)
				middlewareStandard: false

			docpadInstance = require("docpad").createInstance(docpadInstanceConfiguration, (err) ->
				return console.log(err.stack)  if err
				
				# Tell DocPad to perform a generation, extend our server with its routes, and watch for changes
				docpadInstance.action "generate server watch", (err) ->
					return console.log(err.stack)  if err
					console.log "DocPad server running."
			)
			
		return this
