const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

let noteWrapper = document.createElement("div");             
noteWrapper.className = "note";

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    attachEvents();
}

function attachEvents() {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.onkeyup = function() {
            updateStorage();
        }
    });
    const deleteIcons = document.querySelectorAll(".input-box img");
    deleteIcons.forEach(icon => {
        icon.onclick = function() {
            icon.parentElement.remove();
            updateStorage();
        }
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Images/delete.jpg";
    noteWrapper.appendChild(inputBox);                     
    noteWrapper.appendChild(img);                          
    notesContainer.appendChild(noteWrapper);
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
    attachEvents();
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

showNotes();
