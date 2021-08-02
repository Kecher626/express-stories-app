// protect the routes that users cant access without Authenticating

module.exports = {
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()) { //from passport.js
            return next()
        } else {
            res.redirect('/')
        }
    },
    ensureGuest: function(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/dashboard');
        }
    },
}