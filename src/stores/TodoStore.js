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
  @observable showCompleted = true;
  @observable showCompletedTodo = false;

  addTodo = value => {
    this.todos.push(new Todo(value));
  };

  toggleFilterCompleted = () => {
    this.showCompleted = !this.showCompleted;
  };

  toggleTodo = id => {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  clearAll = () => {
    this.todos = [];
  };

  get todoCount() {
    return this.todos.length;
  }

  get filteredTodos() {
    return this.todos.filter(todo => this.showCompleted || todo.completed)
      .length > 0
      ? this.todos.filter(todo => this.showCompleted || todo.completed)
      : this.todos;
  }
}

const store = new TodoStore();

export default store;
