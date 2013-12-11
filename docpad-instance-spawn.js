module.exports = function spawnDocpad(port){
    
    console.log('DocPad Spawn init.');
    
    // if (!(this instanceof spawnDocpad)) return new spawnDocpad;
    
  // Create Server and Express Application
    var express = require('express'),
        http = require('http'),
        httpProxy = require('http-proxy'),
        app = express();

    httpProxy.createProxyServer({target:'http://localhost:8080'}).listen(port);
    // var server = http.createServer(app).listen(docport);
    
    // Add our Application Middlewares
    app.use(app.router);
    
    // Add DocPad to our Application
    var docpadInstanceConfiguration = {
        // Give it our express application and http server
        serverExpress: app,
        serverHttp: httpProxy,
    
        // Tell it not to load the standard middlewares (as we handled that above)
        middlewareStandard: false
    };
    var docpadInstance = require('docpad').createInstance(docpadInstanceConfiguration, function(err){
        if (err)  return console.log(err.stack);
    
        // Tell DocPad to perform a generation, extend our server with its routes, and watch for changes
        docpadInstance.action('generate server watch', function(err){
            if (err)  return console.log(err.stack);
            console.log('DocPad server running.');
        });
    });

};
