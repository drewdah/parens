// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'),
    http       = require('http'),
    path       = require('path'),
    fs         = require('fs'),
    app        = express();

// some environment variables
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        route.controller(app);
    }
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});