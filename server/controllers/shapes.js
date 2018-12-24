const shapesDB = require('../shapes');

module.exports = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(shapesDB));
    res.end();
}