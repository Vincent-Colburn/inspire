// import { ProxyState } from "../AppState.js";
// import Todo from "../models/Todo.js"

// export function saveState() {
//     localStorage.setItem("taskData", JSON.stringify({ todos: ProxyState.todos }))
// }

// export function loadState() {
//     let data = JSON.parse(localStorage.getItem("taskData"))
//     if (data) {
//         console.log(data, "data1")
//         ProxyState.todos = data.todos.map(t => new Todo())
//         console.log(ProxyState.todos, "proxy")
//         console.log(data, "data2")
//     }
// }