const validator = require('validator');
const isEmpty = require('lodash').isEmpty;

module.exports = (data) => {
    let errors = {};

    if(!isEmpty(data.codepen) && !validator.isURL(data.codepen)) errors.codepen = 'Not a valid URL';

    if(isEmpty(data.name)) errors.name = 'Name field required';
    if(isEmpty(data.component)) errors.component = 'Component field required';

    return {
        errors,
        isValid: isEmpty(errors)
    }
}