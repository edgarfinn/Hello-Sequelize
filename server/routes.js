const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello root');
})
router.get('/one', (req, res) => {
  res.send('hello one');
})
router.get('/two', (req, res) => {
  res.send('youre at two');
})

module.exports = router;
