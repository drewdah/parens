var Bracket = require('../models/bracket');
module.exports.controller = function(app) {
    // /bracket/ route
    app.get('/bracket', function(req, res) {
        res.render('bracket/view', {bracket: Bracket})
    });

}