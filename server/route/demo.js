const router = require('express').Router();
const demoController = require('../controllers/demo');

// @route GET /api/demo
// @desc Take primary and background color and return Css
// @access Public
router.get('/', demoController);

module.exports = router;