module.exports = data => {
    return Object.keys(data).map(function(key) {
        return key + '=' + data[key];
    }).join('&');
}