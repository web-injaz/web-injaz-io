var Controller = require('../controllers/controller');

module.exports = function(app) {
    app.get('/bg', Controller.bgSassJson);
    app.get('/shapes', Controller.shapesList);
};