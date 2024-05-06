
document.addEventListener("DOMContentLoaded", function () {
    const url = "http://localhost:3000";

    const taskDetailsContainer = document.getElementById("taskDetailsContainer");
    const deleteTask = document.getElementById("deleteTask");
    const getTaskBtn = document.getElementById("getTaskBtn");
    const createTaskBtn =  document.getElementById("createTaskBtn");
    const taskTitleInput = document.getElementById("taskTitleInput");
    const taskCompletedInput = document.getElementById("taskCompletedInput");
    
    async function getTasks() {
        const tasks = axios.get(url + "/task")
            .then(response => {
                let allTasks = response.data.data;
                return allTasks;
            })
            .catch(err => {
                console.log(err);
            })
        return tasks;
    }

    function showTask(id) {
        axios.get(url + "/task/" + id)
            .then(response => {
                console.log(response.data.data);
                displayTaskDetail(response.data.data)
                claearMessage();
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status == 404) {
                    console.log(err.response.data.message);
                    const errorMessage = document.getElementById("errorMessage");
                    errorMessage.textContent = err.response.data.message;
                    clearDeatail();
                    
                }
            })
    }

    getTaskBtn.addEventListener('click', async function () {
        const taskIdInput = document.getElementById("taskIdInput");
        if (!taskIdInput.value) {
            alert("Please enter ID!")
        } else {
            console.log(taskIdInput.value);
            showTask(taskIdInput.value);
        }
    })

    function displayTaskDetail(task) {
        let cardDetail = '';
        cardDetail = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">Status: 
                    <span class="fw-bold ${task.completed ? 'text-success' : 'text-danger'}">
                        ${task.completed ? 'Completed' : 'Incompleted'}
                    </span>
                </p>
            </div>
        </div> `;
        taskDetailsContainer.innerHTML = cardDetail;
    }


    function displayTasks(tasks) {
        taskDetailsContainer.innerHTML = ""
        let deleteId = null;

        tasks.forEach(task => {
            taskDetailsContainer.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${task.title}</h5>
                    <p class="card-text">Status: 
                        <span class="fw-bold ${task.completed ? 'text-success' : 'text-danger'}">
                            ${task.completed ? 'Completed' : 'Incomplete'}
                        </span>
                    </p>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button class="btn btn-primary mx-2">Edit</button>
                    <button type="button" id="del" data-index="${task.id}" class="btn btn-danger" 
                    data-bs-toggle="modal" data-bs-target="#deleteTaskModal">Delete</button>
                </div>
            </div>
        `;
        });

        const btnDels = document.querySelectorAll("#del");
        btnDels.forEach(btn => {
            btn.onclick = (e) => {
                deleteId = e.target.dataset.index;
                console.log(deleteId);
            }
        }); 
        deleteTask.onclick = () => {
            axios.delete(url + "/task/" + deleteId)
            .then(response => {
                let allTasks = getTasks();
                allTasks.then((data) => {
                    allTasks = data;
                    displayTasks(allTasks)
                })
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    function claearMessage() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = '';
    }

    function clearDeatail() {
        const taskDetailsContainer = document.getElementById("taskDetailsContainer");
        taskDetailsContainer.textContent = "";
    }

    function createTask(data) {
        axios.post(url + "/task", data)
        .then(response => {
            let allTasks = getTasks();
            allTasks.then((data) => {
                allTasks = data;
                displayTasks(allTasks)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }


    createTaskBtn.addEventListener("click", function(){
        const newTask = {
            title: taskTitleInput.value,
            completed: taskCompletedInput.checked
        }
        createTask(newTask);
    })   


    let allTasks = getTasks();
    allTasks.then(async (data) => {
        allTasks = data;
        displayTasks(allTasks)
    })


})