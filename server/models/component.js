const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComponentSchema = Schema({
    name: {
        type: String,
        required: true
    },
    source: {
        type: String,
        default: 'bootstrap'
    },
    shapes: [
        {
            shape: {
                type: String,
                required: true,
                unique: true
            },
            package: {
                type: String,
                default: 'https://www.npmjs.com/package/wi-theme-famous'
            },
            codepen: {
                type: String
            },
            status: {
                type: Boolean,
                default: false
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Component = mongoose.model('components', ComponentSchema);