const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("List-container");
const loginContainer = document.getElementById("login-container");
const todoContainer = document.getElementById("todo-container");

// Dummy credentials for login
const USERNAME = "user";
const PASSWORD = "password";

// Function to handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === USERNAME && password === PASSWORD) {
        alert("Login successful");
        loginContainer.style.display = "none";
        todoContainer.style.display = "block";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Function to handle logout
function logout() {
    todoContainer.style.display = "none";
    loginContainer.style.display = "block";
}

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);

}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();
