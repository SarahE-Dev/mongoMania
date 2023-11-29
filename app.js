const express = require('express');
const logger = require('morgan');

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/recipe-data')
  .then(()=>{
    console.log('MONGO DB CONNECTED');
  })
  .catch((err)=>{
    console.log(err);
  })

  const indexRouter = require('./routes/indexRouter')
  const recipeRouter = require('./routes/recipe/recipeRouter')

  const app = express();

  app.use(logger('dev'));
  app.use(express.json());

  app.use('/', indexRouter)
  app.use('/recipes', recipeRouter);

  app.listen(3000, ()=>{
    console.log('server started on port 3000');
  })


  module.exports = app;