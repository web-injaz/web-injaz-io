const backgroundGenerator = require('./backgroundGenerator');
const componentsSassGenerator = require('./componentSassGenerator');
const shapesSassGenerator = require('./shapesSassGenerator');

module.exports = function SassGenerator(variables) {
    return (
        backgroundGenerator(variables, true) +
        componentsSassGenerator(variables) +
        shapesSassGenerator(variables)
    )
}
       