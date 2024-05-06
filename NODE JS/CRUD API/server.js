const express = require("express");
const app = express();
const port = 8000;
const taskModel = require('./models/taskModel');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.status(200).send({message: "Welcome to API!"})
});

app.post("/task", (req, res) => {
    const newTask = taskModel.createTask(req.body);
    try {
        res.status(200).send({success: true, message: "Task created successfully", data : newTask});
    } catch (error) {
        res.status(404).send({success: false,  message: "something went wrong!"});
    }
});

app.get("/tasks", (req, res) => {
    const tasks = taskModel.getTasks();
    try {
        res.status(200).send({ success: true, message: "You got all tasks!", data: tasks})
    } catch (error) {
        res.status(404).send({success: false,  message: "something went wrong!"});
    }
})

app.get("/task/:id", (req, res) => {
    const task = taskModel.getTaskById(req.params.id);
    if (task) {
        res.status(200).send({ success: true, message: "your request was successfully", data: task });
    }
    res.status(404).send({success: false,  message: "something went wrong!"});  
});

app.put("/task/:id", (req, res) => {
    const taskUpdate = taskModel.updateTaskById(req.params.id, req.body);
    if (taskUpdate) {
        res.status(200).send({ success: true, message: "your request was successfully", data: taskUpdate });
    }
    res.status(404).send({success: false,  message: "something went wrong!"});  
});

app.delete("/task/:id", (req, res) => {
    const taskDeleted = taskModel.deleteTask(req.params.id);
    if (taskDeleted) {
        res.status(200).send({ success: true, message: "task delete successfully", data: taskDeleted });
    }
    res.status(404).send({success: false,  message: "something went wrong!"});  
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});