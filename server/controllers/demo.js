const Sass = require('node-sass');

module.exports = (req, res) => {
    const params = req.query;
        
    const sassData = `
        $primary: ${params.primary};
        $color: ${params.bgColor};
        $enable-default-root: false;
        @import "wi-framework/variables/index";
        @import "wi-framework/colors/index";
        $name: 'dark' !default;
        $color: #343a40 !default;
        @include create-background($name, $color);
    `;

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
    
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(result.css);
    res.end();
}