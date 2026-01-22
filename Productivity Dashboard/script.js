// Cards
const useBtn = document.getElementById("use");
const todoSection = document.querySelector(".todo-container");


useBtn.addEventListener("click", function () {
    todoSection.classList.toggle("show");
});



// Todo-List
const inputBox=document.getElementById("todo-input-box");
const listContainer=document.getElementById("todo-list-container");


function addTask() {
    if(inputBox.value.trim() === "") {
        alert("You must write something");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

const closeBtn = document.getElementById("todo-close");
const todoPopup = document.querySelector(".todo-container");

closeBtn.addEventListener("click", () => {
    todoPopup.classList.remove("show");
});

