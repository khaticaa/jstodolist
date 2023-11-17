function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Xahis edirem bisey girin.");
        return;
    }

    let taskItem = document.createElement("li");
    taskItem.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(taskItem);

    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Sil"));
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);}

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    
        taskInput.value = "";

 
}
