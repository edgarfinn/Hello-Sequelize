const express = require('express');
const router = express.Router();
const todoController = require('../controllers').todo;

router.get('/', (req, res) => {
  res.send('hello root');
})
router.get('/one', (req, res) => {
  res.send('hello one');
})
router.get('/two', (req, res) => {
  res.send('youre at two');
})

router.post('/api/todo', (req, res) => {
  return todoController.create(req, res);
});
router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}));


module.exports = router;
