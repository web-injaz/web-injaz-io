module.exports = (params, full = false) => {
    let sass = '';
    let map = '';
    if(params.primary) sass += `$primary: ${params.primary};`;
    if(params.secondary) sass += `$secondary: ${params.secondary};`;
    if(params.enable_default_root === false) sass += `$enable-default-root: ${params.enable_default_root};`;
    if(params.enable_inverse === false) sass += `$enable-inverse: ${params.enable_inverse};`;
    if(params.enable_contrast === false) sass += `$enable-contrast: ${params.enable_contrast};`;
    if(params.enable_trans === false) sass += `$enable-trans: ${params.enable_trans};`;
    if(params.enable_gray === false) sass += `$enable-gray: ${params.enable_gray};`;
    if(params.enable_darken) sass += `$enable-darken: ${params.enable_darken};`;
    if(params.enable_lighten) sass += `$enable-lighten: ${params.enable_lighten};`;
    if(params.text || params.headers || params.links) {
        map += ',(';
            if(params.text) map += `'text': ${params.text},`;
            if(params.headers) map += `'headers': ${params.headers},`;
            if(params.links) map += `'links': ${params.links},`;
        map += ')';
    }
    if(!params.name) params.name = 'dark';
    if(params.background && params.name) {
        if(!full) {
            sass += `@import 'node_modules/wi-framework/variables/index';`;
            sass += `@import 'node_modules/wi-framework/colors/index';`;
        }
        if(full) {
            sass += `@import 'node_modules/wi-framework/index';`;
        }
        sass += `@include create-background('${params.name}', ${params.background}${map});`;
    }

    return sass;
}