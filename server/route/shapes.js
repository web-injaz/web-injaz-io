const router = require('express').Router();
const shapeValidator = require('../validation/shape');
const Component = require('../models/component');
const shapesDB =require('../shapes');

// @route GET /api/shapes
// @desc Take the required components as params and return all the shapes available for them
// @access Public
router.get('/', (req, res) => {
    const components = Object.values(req.query);
    let requiredComponents;
    
    Component.find().then(comp => {
        return res.json(comp);
    }, err => {
        if(err) throw err;
    })
    .catch(err => {if(err) throw err})

    // if (components.length > 0) {
    //     // Ask for specific components
    //     requiredComponents = shapesDB.filter(comp => components.filter(item => comp.name === item).length !== 0);
    // } else {
    //     // Return all components if there is no params
    //     requiredComponents = shapesDB;
    // }
    
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write(JSON.stringify(requiredComponents));
    // res.end();
});

// @route POST /api/shapes
// @desc Add shape to the database
// @access Public
router.post('/', (req, res) => {
    const { errors, isValid } = shapeValidator(req.body);

    if(!isValid) return res.status(400).json(errors);

    const newShape = {};
    if(req.body.name) newShape.shape = req.body.name;
    if(req.body.codepen) newShape.shape = req.body.codepen;

    Component.findOne({ name: req.body.component })
    .then(comp => {
        if(!comp) return res.status(404).json({component: 'Component not found'});        
        if(comp.shapes.length > 0 && comp.shapes.filter(item => item.shape === newShape.name).length > 0) return res.status(401).json({name: 'Shape already exist'});
        comp.shapes.push(newShape);
        comp.save().then(component => res.json(component));
    })
    .catch(err => {
        if(err) res.status(402).json(err);
    });
});

module.exports = router;