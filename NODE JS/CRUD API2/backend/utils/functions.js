const fs = require('fs');

function getData(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

function saveData(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data), 'utf8');
}

module.exports = {
    getData,
    saveData
}