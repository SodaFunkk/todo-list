let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return;
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
    };

    tasks.push(newTask);
    input.value = "";
    console.log(tasks);

    render();
});

function render() {
    saveTasks();
    list.innerHTML = "";
    tasks.forEach(function (task) {
        const li = document.createElement("li");
        
        if (task.completed){
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function() {
            toggleTask(task.id);
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function(){
            deleteTask(task.id);
        });

        li.append(checkbox, span, deleteBtn);
        list.append(li);
    });
}

function toggleTask(id) {
    const task = tasks.find(function (t){
        return t.id === id;
    });
    
    task.completed = !task.completed;

    render();
}

function deleteTask(id) {
    tasks = tasks.filter(function (t){
        return t.id !== id;
    });
    
    render();
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
render();