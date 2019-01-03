const router = require('express').Router();
const shapesController = require('../controllers/shapes');
const shapeValidator = require('../validation/shape');
const Shape = require('../models/shape');

// @route GET /api/shapes
// @desc Take the required components as params and return all the shapes available for them
// @access Public
router.get('/', shapesController);

// @route POST /api/shapes
// @desc Add shape to the database
// @access Public
router.post('/', (req, res) => {
    const { errors, isValid } = shapeValidator(req.body);

    if(!isValid) return res.status(400).json(errors);

    const shape = new Shape(req.body);

    shape.save().then(shape => res.json(shape))
    .catch(err => res.status(305).json({database: 'Error saving to database'}));
});

module.exports = router;