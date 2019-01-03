'use strict';

const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();
var path = require('path');

// env variables
const PORT = process.env.PORT || 5000;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/webinjaz-io';

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: ''
// });

// db.connect(function(err) {    
//     if(err) throw err;
//     console.log('Connected!'); 
// });

app.use(compression());
app.use(bodyParser.json(), cors());

const Demo = require('../route/demo');
const Compile = require('../route/compile');
const Shapes = require('../route/shapes');
app.use('/api/demo', Demo);
app.use('/api/compile', Compile);
app.use('/api/shapes', Shapes);

app.use(express.static(path.join(__dirname, '../../', 'build')))

app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../', 'build', 'index.html'));
});

app.all('*', (req, res) => {
    window.location.href = '/';
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