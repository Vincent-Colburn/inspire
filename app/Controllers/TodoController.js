import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js"


//TODO Create the draw function
function _drawTodos() {

  // console.log("drawing todos")
  let todos = ProxyState.todos
  let template = ''
  todos.forEach(todo => {
    template += todo.Template
  })
  document.getElementById('toDoList').innerHTML = template
  _drawAmountChecked();

  function _drawAmountChecked() {
    let todos = ProxyState.todos
    let complete = todos.filter(t => t.completed == true)
    document.getElementById('toDoCompleted').innerHTML = `<h4 class="text-center">To Do List: </h4><h5 class="text-center"> Tasks Completed:  ${complete.length} / ${todos.length}</h5>`
  }

}

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos)

    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //TODO build the todo object from the data that comes into this method - Currently DONE
    var todo = {
      description: form['taskDescription'].value
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 */
  toggleTodoStatus(id) {

    let completed = document.getElementById(`${id}`).checked
    try {
      todoService.toggleTodoStatus(id, completed);
      console.log("look here plz2324", completed)
    } catch (error) {
      console.error(error)
    }

  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(id) {
    try {
      todoService.removeTodo(id);
    } catch (error) {
      console.error(error)
    }
  }
}