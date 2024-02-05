var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var validator=require('validator');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
var mysql=require('mysql');
let app= require('express-validator');

var conn = require('./lib/db');
var authRouter = require('./routes/auth');
let app=express();
const port=3000;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());
app.use(express-validator());
app.use(validator());

app.use(express.json());
app.use(mysql());



app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(error, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.render('error');
});
// port must be set to 3000 because incoming http requests are routed from port 80 to port 8080
app.listen( port,() =>{
    console.log('Node app is running on port 3000')
});
module.exports=app;