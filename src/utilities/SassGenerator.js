function createBackground(vars) {    
    return `@include create-background('${vars.bgName}', ${vars.bgColor},(
        'text': ${vars.bgText},
        'headers': ${vars.bgHeaders},
        'links': ${vars.bgLinks}
    ));`;
}

function importBootstrap(check, name) {
    if (check) {
        return `@import 'node_modules/wi-framework/components/bootstrap/${name}';`;
    } else {
        return '';
    }
}

function controlVariables(name, value) {
    return `$enable-${name}: ${value};`;
}

function defineVariable(name, value) {
    if (value) {
        return `$${name}: ${value};`;
    } else {
        return '';
    }
}

function componentsCheck(variables) {
    if (variables.components === 'all') {
        return "@import 'node_modules/wi-framework/components/all';";
    } else {
        return (
            importBootstrap(variables.select2, 'select2') +
            importBootstrap(variables.datepicker, 'datepicker') +
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
        defineVariable('primary', variables.primary) +
        defineVariable('secondary', variables.secondary) +
        controlVariables('default-root' , variables.enableRoot) +
        controlVariables('inverse' , variables.enableInverse) +
        controlVariables('darken' , variables.enableDarken) +
        controlVariables('lighten' , variables.enableLighten) +
        controlVariables('contrast' , variables.enableContrast) +
        controlVariables('trans' , variables.enableTrans) +
        controlVariables('gray' , variables.enableGray) +
        `@import 'node_modules/wi-framework/index';`.trim() +
        createBackground(variables) +
        componentsCheck(variables)
    );
}