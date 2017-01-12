var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page. */
router.get('/celebrities', function(req, res, next) {
  Celebrity.find({}, (err, celebritiesArray) => {
    if (err) { return next(err); }

    res.render('celebrities/index', {
      title: 'Celebrity Inventory',
      celebrities: celebritiesArray
    });
  });
});

router.get('/celebrities/new', function(req, res, next) {
  res.render('celebrities/new', {
    title: "Build Your Celebrity's Profile"
  });

});

router.post('/celebrities', function(req, res, next) {
  const theCelebrity = new Celebrity ({
    name: req.body.name,
    gender: req.body.gender,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
    netWorth: req.body.netWorth,
    isDeceased: req.body.isDeceased
  });

  theCelebrity.save ((err) => {
    if (err) {
      res.render('celebrities/new', {
        title: "Build Your Celebrity's Profile"
      });
    }
    else {
      res.redirect('/celebrities');
    }
  })
});










module.exports = router;
