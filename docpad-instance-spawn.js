module.exports = exports = function(spawnDocpad) {

    spawnDocpad: function(port) {
      var app, docpadInstance, docpadInstanceConfiguration, express, http, server;
      console.log("DocPad init.");
      express = require("express");
      http = require("http");
      app = express();
      server = http.createServer(app).listen(port);
      app.use(app.router);
      docpadInstanceConfiguration = {
        serverExpress: app,
        serverHttp: server,
        middlewareStandard: false
      };
      return docpadInstance = require("docpad").createInstance(docpadInstanceConfiguration, function(err) {
        if (err) {
          return console.log(err.stack);
        }
        return docpadInstance.action("generate server watch", function(err) {
          if (err) {
            return console.log(err.stack);
          }
          return console.log("DocPad server running.");
        });
      });
    }

  return spawnDocpad;
};
