const Sass = require('node-sass');
const SassGenerator = require('./SassGenerator');

module.exports = (req, res) => {
    const params = req.query;

    let sassData = SassGenerator(params);

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
        res.json({
            css: result.css.toString(),
            sass: sassData
        })
    });
}