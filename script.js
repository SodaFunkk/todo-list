let tasks = [];
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

    list.innerHTML = "";

    tasks.forEach(function (task) {
        const li = document.createElement("li");

        li.textContent = task.text;
        list.append(li);
    });
}