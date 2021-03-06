var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var explorationRouter = require('./routes/exploration.routes');
var characterRouter = require('./routes/characters.routes');
var combatmapsRouter = require('./routes/combatmaps.routes')

var starshipRouter = require('./routes/starship.routes');
var challengeRouter = require('./routes/challenges.routes');

var app = express();

app.use(cors());

app.use('/static', express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/exploration', explorationRouter);
app.use('/character', characterRouter);
app.use('/combatmaps', combatmapsRouter);
app.use('/starship', starshipRouter);
app.use('/challenges', challengeRouter);


app.set('view engine', 'pug');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/blackstone';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
