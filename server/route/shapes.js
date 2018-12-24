const router = require('express').Router();
const shapesController = require('../controllers/shapes');

// @route GET /api/shapes
// @desc Take the required components as params and return all the shapes available for them
// @access Public
router.get('/', shapesController);

module.exports = router;