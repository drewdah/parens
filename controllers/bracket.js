var Bracket = require('../models/bracket');
module.exports.controller = function(app) {
    /**
     * a home page route
     */
    app.get('/view', function(req, res) {
        // any logic goes here
        res.render('bracket/view', {bracket: Bracket})
    });

}