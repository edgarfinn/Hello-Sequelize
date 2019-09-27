const Todo = require('../../store/models').Todo;

module.exports = {
  create(req, res) {
    return Todo.create({
      name: req.body.name,
      description: req.body.description,
    })
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error));
  }
}
