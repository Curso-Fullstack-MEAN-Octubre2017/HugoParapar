var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');

//var sample = require('./routes/sample');

var app = express();

var customerRoutes = require('./routes/api.js');

//Socket.IO
app.io = require('socket.io')();
require("./routes/socketio-manager.js")(app.io)

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

//Test
//require("./test/appointments_crud_tests.js");

// Nuevas Rutas van aqui:
app.use('/api/',customerRoutes);


//Front End
app.all("*", (req, res) => {
res.sendFile(path.resolve("public/index.html"));
})

//Error Handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // log the error
  console.error(err)
  res.sendStatus(err.status || 500);
});

module.exports = app;