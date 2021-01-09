export default class Todo {
  constructor({ id, description, completed, user }) {
    this.id = id;
    this.description = description;
    this.completed = completed || false;
    this.user = user
  }

  get Template() {
    return /**html */   `
  <div>
    <div id="toDoCompleted"></div>
    <h5>
        <input type="checkbox" id="${this.id}" onclick="app.todoController.toggleTodoStatus('${this.id}')" ${this.completed ? "checked" : ""}><label for="{this.id}">${this.description}</label>
       <i class="fa fa-trash text-danger cursor-pointer" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i><br/>
    </h5>


    </div>
  
  
    `
  }

}