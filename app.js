const express = require('express');
require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
var mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const Smoothies = require('./routes/smoothies');
const Liquids = require('./routes/liquids');
const Proteins = require('./routes/proteins');
const Fruits = require('./routes/fruits');
const DB = 'mongodb+srv://fladrian:smoothies123@cluster0-va70l.mongodb.net/smoothies-app?retryWrites=true&w=majority'
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/smoothies', Smoothies);
app.use('/liquids', Liquids);
app.use('/fruits', Fruits);
app.use('/proteins', Proteins);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = app;
