const validator = require('validator');
const isEmpty = require('lodash').isEmpty;

module.exports = (data) => {
    const errors = {};

    if(!isEmpty(data.password) && !validator.isLength(data.password, { min: 6})) errors.password = 'Password must be more than 6 characters';
    if(!isEmpty(data.email) && !validator.isEmail(data.email)) errors.email = 'Email not valid';

    if(isEmpty(data.email)) errors.email = 'Email field is required';
    if(isEmpty(data.password)) errors.password = 'Password field is required';

    return {
        errors,
        isValid: isEmpty(errors)
    }
}