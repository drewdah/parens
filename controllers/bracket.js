var Bracket = require('../models/bracket');
module.exports.controller = function(app) {
    app.get('/', function(req, res) {
        res.render('bracket/view', {bracket: Bracket})
    });
}