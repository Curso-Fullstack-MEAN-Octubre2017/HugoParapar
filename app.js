var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var sample = require('./routes/sample');

//*********************************************************************************************
const router = express.Router();

//*********************************************************************************************
//Connecting to MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petStore', {useMongoClient: true});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//// Nuevas Rutas van aqui:
//app.use('/sample', sample);


//*********************************************************************************************
/*app.use('/api', require('./routes/customers')(router));
app.use('/api', require('./routes/pets')(router));*/

const Customer = require('./models/customers')

/*para prueba de concepto del esquema de mongodb*/

const customer = new Customer({ 
	"dni":"123456789",
	"firstName":"Hugo",
	"lastName":"Parapar",
	"phoneNumber":"987654321",
	"email": "email@email.com",
	"note": "nota"
});

customer.save((err) => {

        if (err) {
            console.log(err);
        } else {
            console.log(customer);
        }
 })


//Front End
app.all("*", (req, res) => {
res.sendFile(path.resolve("public/index.html"));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
