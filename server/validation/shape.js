const validator = require('validator');
const isEmpty = require('../../src/utilities/isEmpty');

module.exports = (data) => {
    let errors = {};

    if(!validator.isURL(data.codepen)) errors.codepen = 'Not a valid URL';

    if(isEmpty(data.name)) errors.name = 'Name field required';
    if(isEmpty(data.component)) errors.component = 'Component field required';
    if(isEmpty(data.codepen)) errors.codepen = 'Codepen field required';

    return {
        errors,
        isValid: isEmpty(errors)
    }
}