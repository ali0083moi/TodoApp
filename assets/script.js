//There are in a task => 1.Title 2.Description 3.Category 4.Created Date 5.Label
let getingDate = () => {
    let getDate = new Date();
    let month = getDate.getMonth();
    let day = getDate.getDate();
    let year = getDate.getFullYear();
    let date = `${year}/${month}/${day}`;
    return date;
}
let tasks = [{
    title: "ثبت ساعت مطالعه",
    description: "ثبت ساعت مطالعه باید انجام شود",
    category: "مدرسه",
    label: "minor",
    createdDate: "1399/11/19",
    finishDate: "1399/11/22",
    status: "doing"
},
{
    title: "حل تست های فیزیک",
    description: "تست های کتاب از 100 تا 120 حل شوند",
    category: "مدرسه",
    label: "normal",
    createdDate: "1399/11/13",
    finishDate: "1399/11/17",
    status: "doing"
},
{
    title: "کد todo app رو باید بزنم",
    description: "زدن کد های جاوااسکریپت و html و css",
    category: "کار",
    label: "important",
    createdDate: "1399/12/25",
    finishDate: "1399/12/27",
    status: "done"
},
];
const labels = {
    important: "مهم",
    normal: "معمولی",
    minor: "کم اهمیت"
};

let trId = 0;
let showTask = (task) => {
    if (task.status == "doing") {
        trId++;
        document.getElementById("taskContent").innerHTML += `
        <tr id ="tsakTr${trId}">
        <td id="titleInput${trId}" class="col-md-2">${task.title}</td>
        <td id="descriptionInput${trId}" class="col-md-3">${task.description}</td>
        <td id="categoryInput${trId}" class="col-md-2">${task.category}</td>
        <td id="createdDateInput${trId}" class="col-md-1">${task.createdDate}</td>
        <td id="finishDateInput${trId}" class="col-md-1">${task.finishDate}</td>
        <td class="col-md-1">
            <p id="labelInput${trId}" class="label_${task.label}">
            ${labels[task.label]}
            </p>
        </td>
        <td class="col-md-2 task_action">
            <button onclick="doneTask(${trId})" style="color: #58BB57;"><i class="fas fa-check"></i></button>
            <button onclick="showEditTaskDiv(${trId})" style="color: #ffffff;"><i class="fas fa-edit"></i></button>
            <button onclick="deleteTask(${trId})" style="color: #B83731;"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>`
    }
}
for (let task of tasks) {
    showTask(task)
}
let addTask = () => {
    let title = document.getElementById("taskTitle").value;
    let description = document.getElementById("taskDescription").value;
    let category = document.getElementById("taskCategory").value;
    let label = document.getElementById("taskLabel").value;
    let createdDate = getingDate();
    let finishDate = document.getElementById("taskFinishDate").value.replaceAll("-", "/");

    if (title && category && finishDate) {
        let task = {
            title,
            description,
            category,
            label,
            createdDate,
            finishDate,
            status: "doing"
        }
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDescription").value = "";
        document.getElementById("taskCategory").value = "";
        document.getElementById("taskFinishDate").value = "";
        console.log(finishDate)
        showTask(task);
        tasks.push(task)
        closeAddTaskDiv();
    }
    else {
        alert("Please enter the important value")
    }
}
let editTask = (trId) => {
    let title = document.getElementById("taskTitleE").value;
    let description = document.getElementById("taskDescriptionE").value;
    let category = document.getElementById("taskCategoryE").value;
    let label = document.getElementById("taskLabelE").value;
    let createdDate = getingDate();
    let finishDate = document.getElementById("taskFinishDateE").value.replaceAll("-", "/");

    if (title && category && finishDate) {
        let task = {
            title,
            description,
            category,
            label,
            createdDate,
            finishDate,
            status: "doing"
        }
        closeEditTaskDiv();
        document.getElementById(`titleInput${trId - 1}`).innerHTML = title;
        document.getElementById(`descriptionInput${trId - 1}`).innerHTML = description;
        document.getElementById(`categoryInput${trId - 1}`).innerHTML = category;
        document.getElementById(`labelInput${trId - 1}`).innerHTML = labels[label];
        document.getElementById(`finishDateInput${trId - 1}`).innerHTML = finishDate;
        console.log(trId)
        tasks[trId - 2] = task;
        console.log(tasks)
    } else {
        alert("Please enter the important value")
    }
}
let doneTask = (trId) => {
    alert(`آفرین شما کار " ${tasks[trId - 1].title} " رو انجام دادید`)
    document.getElementById(`tsakTr${trId}`).style.display = "none";
    tasks[trId - 1].status = "done";
    console.log(tasks[trId - 1])
}
let deleteTask = (trId) => {
    tasks.splice(tasks[trId - 1], 1);
    document.getElementById(`tsakTr${trId}`).style.display = "none";
}
let closeAddTaskDiv = () => {
    document.getElementById("addTaskDiv").style.display = "none"
}
let closeEditTaskDiv = () => {
    document.getElementById("editTaskDiv").style.display = "none"
}
let showAddTaskDiv = () => {
    document.getElementById("addTaskDiv").style.display = "flex"
}
let showEditTaskDiv = (trId) => {
    document.getElementById("editTaskDiv").style.display = "flex"
    document.getElementById("taskTitleE").value = tasks[trId - 1].title;
    document.getElementById("taskDescriptionE").value = tasks[trId - 1].description;
    document.getElementById("taskCategoryE").value = tasks[trId - 1].category;
    document.getElementById("taskFinishDateE").value = tasks[trId - 1].finishDate;
    document.getElementById("taskLabelE").value = tasks[trId - 1].label;
}