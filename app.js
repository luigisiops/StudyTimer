let taskTitleInput = document.getElementById("taskTitleInput");
let addTask = document.getElementById("addTask");
let tasks = document.getElementById("tasks");

addTask.addEventListener("click", function() {
    let div = document.createElement("div")
    div.className = "task"
    div.setAttribute("draggable", "true")

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.className = "checkbox";
    div.appendChild(check);

    let title = document.createElement("h3");
    title.innerHTML = taskTitleInput.value;
    div.appendChild(title);

    let remove = document.createElement("button")
    remove.innerHTML = "Remove";
    div.appendChild(remove);

    remove.addEventListener('click', function() {    
        let p_dom = this.parentNode;
        p_dom.remove();
    });

    tasks.appendChild(div);

    taskTitleInput.value = '';
});

taskTitleInput.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        addTask.click();
    };
});

let timerButton = document.getElementById("timerButton");
let shortButton = document.getElementById("short");
let longButton = document.getElementById("long");
let timerContain = document.getElementsByClassName("timerContainer");
let background = document.getElementById("html");

timerButton.addEventListener("click", function() {
    background.style.backgroundColor = "#1F7A8C";
    timerContain.style.backgroundColor = "rgba(27, 109, 126, .3)";
})

shortButton.addEventListener("click", function() {
    background.style.backgroundColor = "#053C5E";
    timerContain.style.backgroundColor = "rgba(29, 79, 110, .3)";
})

longButton.addEventListener("click", function() {
    background.style.backgroundColor = "#A31621";
    timerContain.style.backgroundColor = "rgba(172,	45, 55, .3)";
})

// changing the transparent background of the timerContainer doesn't work yet, so I haven't looked at how the rgba values here actually look