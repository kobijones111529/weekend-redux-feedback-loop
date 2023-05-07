const express = require('express');
const { getFeedback, addFeedback } = require('../data/database');

const router = express.Router();

router.get('/', (_, res) => {
  getFeedback()
    .then(feedback => {
      res.send(feedback);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  addFeedback(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
