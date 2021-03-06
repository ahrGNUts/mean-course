const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const uri = "mongodb+srv://meanuser:er8YrIrEDJFETQae@cluster0-41u2j.mongodb.net/node-angular?retryWrites=true"

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express(); // create express app

mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false })); // can also use this as an alternative to the line above
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
