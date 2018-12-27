const shapesDB = require('../shapes');

// module.exports = (req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(JSON.stringify(shapesDB));
//     res.end();
// }

module.exports = (req, res) => {
    const components = Object.keys(req.query);

    const requiredComponents = shapesDB.filter(comp => components.filter(item => comp.name === item));

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(requiredComponents));
    res.end();
}