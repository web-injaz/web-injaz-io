'use strict';

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const passport = require('passport');

const app = express();
var path = require('path');

// env variables
const PORT = process.env.PORT || 5000;

// Database
const mongoose = require('mongoose');
const db = require('./config').db;

mongoose.connect(db, {useCreateIndex: true,useNewUrlParser: true}, err => {if(!err) console.log('MongoDB Connected')});

app.use(compression());
app.use(bodyParser.json(), cors());

// Authentication
app.use(passport.initialize());
require('./auth/passport')(passport);

// Routes
const Demo      = require('../route/demo');
const Compile   = require('../route/compile');
const Shapes    = require('../route/shapes');
const User      = require('../route/user');
app.use('/user', User);
app.use('/api/demo', Demo);
app.use('/api/compile', Compile);
app.use('/api/shapes', Shapes);

// Midlewares

app.use(express.static(path.join(__dirname, '../../', 'build')))

app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../', 'build', 'index.html'));
});

app.all('*', (req, res) => {
    res.redirect('/');
});

// app.use(require('../middlewares/errorHandler'));

exports.start = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    })
}

exports.stop = () => {
    app.close(PORT, () => {
        console.log(`Shut down on port: ${PORT}`);
    })
}