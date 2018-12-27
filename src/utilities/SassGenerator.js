const isEmpty = require('./isEmpty');
const backgroundGenerator = require('./backgroundGenerator');

function importBootstrap(check, name) {
    if (!isEmpty(check)) {
        return `@import 'node_modules/wi-framework/components/bootstrap/${name}';`;
    } else {
        return '';
    }
}

function importComponents(check, name) {
    if (!isEmpty(check)) {
        return `@import 'node_modules/wi-framework/components/${name}';`;
    } else {
        return '';
    }
}

function componentsCheck(variables) {
    if (variables.components === 'all') {
        return "@import 'node_modules/wi-framework/components/all';";
    } else {
        return (
            importComponents(variables.select2, 'select2') +
            importComponents(variables.datepicker, 'datepicker') +
            importComponents(variables.card, 'card') +
            importComponents(variables.headerSection, 'header-section') +
            importComponents(variables.panel, 'panel') +
            importBootstrap(variables.navbar, 'navbar') +
            importBootstrap(variables.carousel, 'carousel') +
            importBootstrap(variables.alert, 'alert') +
            importBootstrap(variables.badge, 'badge') +
            importBootstrap(variables.breadcrumb, 'breadcrumb') +
            importBootstrap(variables.buttonGroup, 'button-group') +
            importBootstrap(variables.buttons, 'buttons') +
            importBootstrap(variables.card, 'card') +
            importBootstrap(variables.code, 'code') +
            importBootstrap(variables.customForms, 'custom-forms') +
            importBootstrap(variables.forms, 'forms') +
            importBootstrap(variables.dropdown, 'dropdown') +
            importBootstrap(variables.inputGroup, 'input-group') +
            importBootstrap(variables.jumbotron, 'jumbotron') +
            importBootstrap(variables.listGroup, 'list-group') +
            importBootstrap(variables.media, 'media') +
            importBootstrap(variables.modal, 'modal') +
            importBootstrap(variables.nav, 'nav') +
            importBootstrap(variables.pagination, 'pagination') +
            importBootstrap(variables.popover, 'popover') +
            importBootstrap(variables.progress, 'progress') +
            importBootstrap(variables.tables, 'tables') +
            importBootstrap(variables.tooltip, 'tooltip')
        );
    }
}

module.exports = function SassGenerator(variables) {    
    return (
        backgroundGenerator(variables, true) + 
        componentsCheck(variables)
    );
}