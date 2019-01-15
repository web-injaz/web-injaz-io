const Sass = require('node-sass');
const SassGenerator = require('./SassGenerator');

module.exports = (req, res) => {
    const params = req.query;

    // Sass
    let sassData = SassGenerator(params);
    
    // Css
    Sass.render({
        data: sassData,
        includePaths: [
            'node_modules',
            '../../node_modules',
            '../../'
        ]
    }, (err, result) => {
        if (err) return res.json({
            message: err.message,
            status: 209
        }).end();
        // BG Style
        var css = result ? result.css.toString() : '';
        var half = css.slice(css.indexOf('.bg-'), css.length);
        var bgStyle = half.slice(0, half.indexOf('}') + 1);
        res.json({
            css: result.css.toString(),
            sass: sassData,
            bg: bgStyle
        })
    });
}