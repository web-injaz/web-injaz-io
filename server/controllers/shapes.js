const shapesDB = require('../shapes');

module.exports = (req, res) => {
    const components = Object.values(req.query);
    let requiredComponents;

    if (components.length > 0) {
        // Ask for specific components
        requiredComponents = shapesDB.filter(comp => components.filter(item => comp.name === item).length !== 0);
    } else {
        // Return all components if there is no params
        requiredComponents = shapesDB;
    }
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(requiredComponents));
    res.end();
}