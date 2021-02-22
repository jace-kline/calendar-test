var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// post a users signup
router.post('/signup', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// login a user
router.post('/login', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// logout a user
router.post('/logout', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
