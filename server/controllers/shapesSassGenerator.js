const isEmpty = require('../util/isEmpty');

function importShapes(check, comp_name, shape_name) {
    if (!isEmpty(check)) {
        return `@import 'node_modules/wi-theme-famous/shapes/${comp_name}/${shape_name}';`;
    } else {
        return '';
    }
}

module.exports = (variables) => {
    if (variables.shapes === 'all') {
        return "@import 'node_modules/wi-theme-famous/shapes';";
    } else {
        return (
            importShapes(variables.cristiano, 'navbar', 'cristiano') +
            importShapes(variables.ozil, 'navbar', 'ozil') +
            importShapes(variables.iniesta, 'carousel', 'iniesta') +
            importShapes(variables.messi, 'carousel', 'messi') +
            importShapes(variables.robert, 'carousel', 'robert') +
            importShapes(variables.roni, 'carousel', 'roni') +
            importShapes(variables.zlatan, 'carousel', 'zlatan') +
            importShapes(variables.reko, 'header-section', 'reko') +
            importShapes(variables.cena, 'media', 'cena') +
            importShapes(variables.kazablanka, 'pagination', 'kazablanka') +
            importShapes(variables.jero, 'breadcrumb', 'jero')
        );
    }
}