var Controller = require('../controllers/controller');

module.exports = function(app) {
    app.get('/compile', Controller.compileToCss);
    app.get('/demo', Controller.demoBackground);
    app.get('/shapes', Controller.shapesList);
};