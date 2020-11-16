//There are in a task => 1.Title 2.Description 3.Category 4.Created Date 5.Label
let getDate = () => {
    // let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let getDate = new Date();
    let month = getDate.getMonth();
    let day = days[getDate.getDay()];
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
            year: 2020,
            month: 8,
            day: "Saturday"
        }
    },
    {
        taskTitle: "ersaale taklife fizik",
        taskDescription: "test haaye 100 taa 120",
        taskCategory: "madreseh",
        taskLabel: "normal",
        taskCreatedDate: {
            year: 2020,
            month: 9,
            day: "Wednesday"
        }
    },
    {
        taskTitle: "zadan e code todo app",
        taskDescription: "zadan e code javascript",
        taskCategory: "work",
        taskLabel: "important",
        taskCreatedDate: {
            year: 2020,
            month: 10,
            day: "Tuesday"
        }
    },
];
let addTask = () => {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let taskCategory = document.getElementById("taskCategory").value;
    let taskLabel = document.getElementById("taskLabel").value;
    let taskCreatedDate = getDate();
    if (taskTitle && taskDescription && taskCategory) {
        tasks.push({ taskTitle, taskDescription, taskCategory, taskLabel, taskCreatedDate })
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDescription").value = "";
        document.getElementById("taskCategory").value = "";
        document.getElementById("taskTitle").style.borderColor = "rgb(162 162 162 / 28%)";
        console.log(tasks)
    }
    else if (!taskTitle && taskDescription && taskCategory) {
        document.getElementById("taskTitle").style.borderColor = "red";
    }
    else if (!taskDescription && taskTitle && taskCategory) {
        document.getElementById("taskDescription").style.borderColor = "red";
    }
    else if(!taskCategory && taskTitle && taskDescription){
        document.getElementById("taskCategory").style.borderColor = "red";
    }
    else{
        document.getElementById("taskTitle").style.borderColor = "red";
        document.getElementById("taskDescription").style.borderColor = "red";
        document.getElementById("taskCategory").style.borderColor = "red";
    }
}
let editTask = () => {

}