let currentIndex = 1;
function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}
function checkTodo(index) {
    const element = document.getElementById(index);
    const value = element.getAttribute("data-todo");
    element.innerHTML = "<div><h4>&#9745 " + value + '</h4></div><button onclick="deleteTodo(' + index + ')">Delete</button>';
}
function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", currentIndex);
    newDiv.setAttribute("data-todo", value);
    // currentIndex++;
    newDiv.innerHTML = "<div><h4>" + currentIndex + ". " + value + '</h4></div><button onclick="deleteTodo(' + currentIndex + ')">Delete</button><button onclick="checkTodo(' + currentIndex + ')">Check</button>'; 
    currentIndex++;
    document.querySelector("body").appendChild(newDiv);
}
