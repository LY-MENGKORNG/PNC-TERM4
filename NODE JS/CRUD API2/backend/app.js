const express = require('express');
const app = express();
const port = 3000;
const dataModels = require("./models/dataModels")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/data", (req, res) => {
    try {
        res.status(200).send({ success: true, message: "Here is your data", data: dataModels.getData("./databases/data.json") });
    } catch (error) {
        res.status(404).send({ success: false, message: "something went wrong"});
    }
})

app.post("/data", (req, res) => {
    const newData = dataModels.createData(req.body);
    if (newData) {
        res.status(200).send({ success: true, message: "new data was created successfully", data: newData }); 
    }
    res.status(404).send({ success: false, message: "something went wrong"});
})

app.delete("/data/:id", (req, res) => {
    const dataDelete = dataModels.deleteData(req.params.id);
    if (dataDelete) {
        res.status(200).send({ success: true, message: "data deleted successfully", dataDelete: dataDelete});
    }
    res.status(404).send({ success: false, message: "something went wrong"})
})

app.listen(port, () => console.log(`App listening on port: ${port}`));