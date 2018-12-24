const Sass = require('node-sass');
const SassGenerator = require('../../src/utilities/SassGenerator');

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
        if (err) {
            console.log(err);
            
            res.json({
                message: err.message,
                status: 209
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(result.css);
            res.end();
        }
    });
}