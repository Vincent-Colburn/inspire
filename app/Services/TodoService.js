import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "./AxiosService.js";
// import { saveState } from "../Utils/LocalStorage.js"

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected


let URL = "vincentgirard/todos/";

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(URL)
    ProxyState.todos = res.data.map(t => new Todo(t))
    console.log()
  }

  async addTodo(todo) {

    let res = await api.post(URL, todo)
    console.log("Look over hurrrr", res)
    this.getTodos()
  }

  async toggleTodoStatus(id, completed) {
    let todo = await ProxyState.todos.find(todo => todo.id == id);
    if (completed == true) {
      todo.completed = true
    }
    else { todo.completed = false }



    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(URL + id, todo);
    //TODO how do you trigger this change

  }

  async removeTodo(id) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state

    let res = await api.delete(URL + id)
    console.log("Todo ID for deletion", res)
    ProxyState.todos = ProxyState.todos.filter(t => t.id !== id)

  }

}

const todoService = new TodoService();
export default todoService;