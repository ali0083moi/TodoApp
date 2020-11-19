//There are in a task => 1.Title 2.Description 3.Category 4.Created Date 5.Label
let getingDate = () => {
    // let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let getDate = new Date();
    let month = getDate.getMonth();
    let day = getDate.getDate();
    let year = getDate.getFullYear();
    let date = {
        day: day,
        month: month,
        year: year
    };
    return date;
}
let tasks = [
    {
        taskTitle: "sabte saat motalee",
        taskDescription: "baayad saat motaalee sabt konam .",
        taskCategory: "madreseh",
        taskLabel: "important",
        taskCreatedDate: {
            day: 20,
            month: 8,
            year: 2020
        }
    },
    {
        taskTitle: "ersaale taklife fizik",
        taskDescription: "test haaye 100 taa 120",
        taskCategory: "madreseh",
        taskLabel: "normal",
        taskCreatedDate: {
            day: 18,
            month: 9,
            year: 2020
        }
    },
    {
        taskTitle: "zadan e code todo app",
        taskDescription: "zadan e code javascript",
        taskCategory: "work",
        taskLabel: "important",
        taskCreatedDate: {
            day: 15,
            month: 10,
            year: 2020
        }
    },
];
let doneTasks = [{
    taskTitle: "ersaale taklife riazi",
    taskDescription: "test haaye 125 taa 175",
    taskCategory: "madreseh",
    taskLabel: "important",
    taskCreatedDate: {
        day: 7,
        month: 7,
        year: 2020
    }
}]
let addTask = () => {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let taskCategory = document.getElementById("taskCategory").value;
    let taskLabel = document.getElementById("taskLabel").value;
    let taskCreatedDate = getingDate();
    if (taskTitle && taskCategory) {
        tasks.push({ taskTitle, taskDescription, taskCategory, taskLabel, taskCreatedDate })
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDescription").value = "";
        document.getElementById("taskCategory").value = "";
        console.log(tasks)
    }
    else {
        alert("Please enter the important value")
    }
}
let editTask = () => {

}