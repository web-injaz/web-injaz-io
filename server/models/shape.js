const mongoose = require('mongoose');

const ShapeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    component: {
        type: String,
        required: true
    },
    codepen: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false 
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Shape = mongoose.model('Shape', ShapeSchema);