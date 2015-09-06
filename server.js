var express    = require('express'),
    http       = require('http'),
    path       = require('path'),
    fs         = require('fs'),
    app        = express(),
    router     = express.Router();

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

fs.readdirSync('./controllers').forEach(function (file) {
    if(path.extname(file) == ".js") {
        route = require('./controllers/' + file);
        route.controller(app);
    }
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});