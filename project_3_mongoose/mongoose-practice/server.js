const express = require('express');
const path = require('path');
const app = express();
const api = require('./server/routes/api');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopleDB', {
  useNewUrlParser: true
})
app.use('/', api);

const port = 3000;
app.listen(port, function() {
  console.log(`Running server on port ${port}`);
})