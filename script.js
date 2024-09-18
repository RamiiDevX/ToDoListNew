const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("List-container");
function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li,innerHTML = inputBox.value;
        ListContainer.appendChild(li);
    }
}
