const { readFileSync, writeFileSync } = require('fs');

function getData(filename) {
    return JSON.parse(readFileSync(filename));
}

function save(filename, data) {
    writeFileSync(filename, JSON.stringify(data));
}

module.exports = { getData, save };