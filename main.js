document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    // Add New Task - Functions
    function addTask() {
        let taskText = taskInput.value.trim();
        if (!taskText) return;

        let taskEl = document.createElement("li");
        taskEl.className = "todo-item";

        let taskTextEl = document.createElement("span");
        taskTextEl.textContent = taskText;

        let btnContainer = document.createElement("div");
        btnContainer.className = "buttons";

        // Editing Button Functions
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => {
            let newText = prompt("Edit your task:", taskTextEl.textContent);
            if (newText) taskTextEl.textContent = newText.trim();
        };

        // Delete Button Functions
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => taskList.removeChild(taskEl);

        btnContainer.append(editBtn, deleteBtn);
        taskEl.append(taskTextEl, btnContainer);
        taskList.appendChild(taskEl);

        taskInput.value = "";
        taskInput.focus();
    }

    // Add button event
    addButton.addEventListener("click", addTask);

    // Add New Tasks With Enter Key in Keyboard
    taskInput.addEventListener("keydown", (e) => {
        if (e.key == "Enter") addTask();
    });
});
