document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.className = "todo-item";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "buttons"; // Wrap buttons inside a div for alignment

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit your task:", taskSpan.textContent);
            if (newText !== null) taskSpan.textContent = newText.trim();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        listItem.appendChild(taskSpan);
        listItem.appendChild(buttonContainer);
        taskList.appendChild(listItem);

        taskInput.value = "";
        taskInput.focus();
    });
});
