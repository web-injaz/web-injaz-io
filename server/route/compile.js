const router = require('express').Router();
const compileController = require('../controllers/compile');

// @route GET /api/compile
// @desc Take params for css variables and add convert it to Sass then return the compiled Css
// @access Public
router.get('/', compileController);

module.exports = router;