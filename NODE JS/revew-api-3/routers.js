const express = require('express')
const taskModel = require('./models/task_model')
const routers = express.Router()

routers.get('/task', function (req, res) {
    const search = req.query;
    const tasks = taskModel.getAllTasks(search.title);
    res.status(200).json({ success: true, data: tasks });;
});



routers.get('/task/:id', (req, res) => {
    const task = taskModel.show(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: can`t find any Task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data: task });
});

routers.post('/task', (req, res) => {
    const task = taskModel.store(req.body)
    res.status(200).json({ success: true, data: task });
})

routers.delete('/task/:id', (req, res) => {
    const task = taskModel.destroy(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any Task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, message: "task was deleted successfully" });
})

routers.put('/task/:id', (req, res) => {
    const task = taskModel.update(parseInt(req.params.id), req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data: task });
})

routers.put('/updateStatus/:id',(req,res)=>{
    const task = taskModel.updateStatus(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

routers.put('/task/isComplete/:id',(req,res)=>{
    const task = taskModel.isCompleted(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data: task });
})

routers.put('/task/isNotComplete/:id',(req,res)=>{
    const task = taskModel.isNotComplete(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data: task });
})

routers.get('/listTaskCompleted',(req, res) => {
    const task = taskModel.listTaskCompleted();
    res.status(200).json({ success: true, data: task });
})


module.exports = routers