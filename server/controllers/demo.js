const Sass = require('node-sass');
const backgroundGenerator = require('./backgroundGenerator');

module.exports = (req, res) => {
    const params = req.query;
    
    const sassData = backgroundGenerator(params, false);
    
    var result = Sass.renderSync({
        data: sassData,
        includePaths: [
            'node_modules',
            '../../node_modules',
            '../../'
        ]
    }, function(err, result) {
        console.log(err, result);
        
        if (err) {
            res.status(205).send(err.message);
        }
    });
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({
        css: Buffer(result.css).toString(),
        sass: sassData
    }));
    res.end();
}