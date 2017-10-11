var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var sample = require('./routes/sample');

var app = express();

//*********************************************************************************************
var customerRoutes = require('./routes/api.js');


//Connecting to MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petStore', {useMongoClient: true});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//// Nuevas Rutas van aqui:
//app.use('/sample', sample);

app.use('/api/',customerRoutes);


//Front End
app.all("*", (req, res) => {
res.sendFile(path.resolve("public/index.html"));
})



module.exports = app;