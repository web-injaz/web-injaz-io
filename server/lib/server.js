'use strict';

const cors = require('cors');
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();
var path = require('path');

// env variables
const PORT = process.env.PORT || 3001;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/webinjaz-io';

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);
app.use(compression());
app.use(bodyParser.json(), cors());

const routes = require('../route/routes');
routes(app);

app.use(express.static(path.join(__dirname, '../../', 'build')))

app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../', 'build', 'index.html'));
});

app.all('*', (req, res) => {
    return res.sendStatus(404);
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