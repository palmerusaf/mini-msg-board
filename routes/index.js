var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard' });
});

router.post('/new', (req, res) => {
  // console.log({ added: Date.now(), user: req.body.userName, text: req.body.messageText })
  messages.push({ added: new Date(), user: req.body.userName, text: req.body.messageText });
  res.redirect('/');
})

module.exports = router;
