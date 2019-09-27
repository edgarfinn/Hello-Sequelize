require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log('Server listening on port ', port);
})
