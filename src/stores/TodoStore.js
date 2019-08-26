import { observable, action, computed } from "mobx";

class Todo {
  @observable id;
  @observable value;
  @observable completed;

  constructor(value) {
    this.value = value;
    this.completed = false;
    this.id = Date.now();
  }
}

class TodoStore {
  @observable todos = [];
  @observable filter = [];

  @action addTodo = value => {
    this.todos.push(new Todo(value));
  };

  @action clearCompleted = () => {
    this.todos = this.todos.filter(todo => !todo.completed)
  }

  @computed get todoCount() {
    return this.todos.length;
  }
}

const store = new TodoStore();

export default store;
