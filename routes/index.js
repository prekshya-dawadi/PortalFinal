var express = require('express');
var router = express.Router();
const cards = require('../models/cards');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portal' });
});

router.get('/chatrooms', async function(req, res, next){
  const Cards = await cards.find();
  res.render('chatrooms', {cardsList:Cards});
});

router.get('/add', function(req, res, next){
  res.render('add');
});

router.post('/cardsinfo', async function(req, res, next){
  const card = new cards({
    title: req.body.title,
    description: req.body.description,
    imgurl: req.body.imgurl
  });

  await card.save();
  res.redirect('/chatrooms');
});

router.get('/chat/:channel_id', function(req, res, next){
  res.render('chat-window');
});

module.exports = router;
