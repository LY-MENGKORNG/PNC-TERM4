
const fs = require('fs');


function load() {
    return JSON.parse(fs.readFileSync("tasks.json"));
}

function save(data) {
    fs.writeFileSync("tasks.json", JSON.stringify(data));
}

function getAllTasks(title = null) {
    const tasks = load();
    if (title) {
        return tasks.filter(task =>task.title.toLowerCase().includes(title.toLowerCase()));
    }
    return tasks;
}

function show(id) {
    const tasks = load();
    const task = tasks.find(task => task.id === id);
    console.log("task",task);
    return task;
}

function store(newTask) {
    const tasks = load();
    console.log(tasks.length !==0);
    const task = {
        id: tasks.length !==0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: newTask.title,
        completed: newTask.completed
    }
    tasks.push(task);
    save(tasks);
    return task;
}

function destroy(id) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        save(tasks);
        return true;
    }
}

function update(id, data) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const task = { ...tasks[index], ...data };
        tasks[index] = task;
        save(tasks);
        return task;
    }
}

function updateStatus(id, status) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        console.log(tasks[index].completed);
        console.log(status.completed);
        tasks[index].completed = status.completed;
        save(tasks);
        return status;
    }
}


function isCompleted(id) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index].completed = true;
        save(tasks);
        return tasks[index].completed;
    }
}
function isNotComplete(id) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index].completed = false;
        save(tasks);
        return true;
    }
}

function listTaskCompleted() {
    const tasks = load();
    const task = tasks.filter(task => task.completed === true);
    return task;
}

module.exports.getAllTasks = getAllTasks;
module.exports.show = show;
module.exports.store = store;
module.exports.destroy = destroy;
module.exports.update = update;
module.exports.updateStatus = updateStatus;
module.exports.isCompleted = isCompleted;
module.exports.isNotComplete = isNotComplete;
module.exports.listTaskCompleted = listTaskCompleted;
