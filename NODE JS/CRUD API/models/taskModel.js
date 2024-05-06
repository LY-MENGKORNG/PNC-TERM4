const fs = require('fs');

function getTasks() {
    return JSON.parse(fs.readFileSync("./tasks.json"));
}

function saveTask(task) {
    fs.writeFileSync("./tasks.json", JSON.stringify(task));
}

function createTask(newTask) {
    const tasks = getTasks();
    const task = {  
        id: tasks.length == 0 ? 1 : parseInt(tasks[tasks.length - 1].id) + 1,
        title: newTask.title,
        completed: newTask.completed
    }
    tasks.push(task);
    saveTask(tasks);
    return task;
}

function getTaskById(id) {
    const tasks = getTasks();
    const index = tasks.findIndex(task => task.id == id);
    if (index != -1) {
        const task = tasks[index];
        return task;
    }
    return false;
}

function updateTaskById(id, task) {
    const tasks = getTasks();
    const index = tasks.findIndex(task => task.id == id);
    if (index != -1) {
        const taskUpdate = { ...tasks[index], ...task }
        tasks[index] = taskUpdate;
        saveTask(tasks);
        return taskUpdate;
    }
    return false;
}

function deleteTask(id) {
    const tasks = getTasks();
    const index = tasks.findIndex(task => task.id == id);
    if (index != -1) {
        const taskDelete = tasks[index];
        tasks.splice(index, 1);
        saveTask(tasks);
        return taskDelete;
    }
    return false;
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTaskById,
    deleteTask
}