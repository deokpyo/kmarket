var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Kmarket'
  });
});

/* GET admin page. */
router.get('/admin', checkAuth, function (req, res, next) {
  res.render('admin', {
    title: 'Admin Page'
  });
});

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'Login Page'
  });
});

// check for admin login
function checkAuth(req, res, next) {
  if (req.session.token == null) {
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = router;