const { saveData, getData } = require("../utils/functions");
const { v4: uuidv4 } = require('uuid');

function createData(data) {
    const allData = getData("./databases/data.json");
    const newData = {
        id: uuidv4(),
        first_name: data.first_name,
        last_name: data.last_name, 
        age: data.age,
    }
    allData.push(newData);
    saveData("./databases/data.json", allData);
    return newData;
}

function deleteData(id) {
    const allData = getData("./databases/data.json");
    index = allData.findIndex(data => data.id == id);
    if (index !== -1) {
        dataDelete = allData[index];
        allData.splice(index, 1);
        saveData("./databases/data.json", allData)
        return dataDelete;
    }
    return false;
}


module.exports = {
    createData,
    deleteData,
    getData
}