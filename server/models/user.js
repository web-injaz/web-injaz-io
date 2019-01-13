const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Array,
        default: ['user']
    }
});

module.exports = User = mongoose.model('User', UserSchema);