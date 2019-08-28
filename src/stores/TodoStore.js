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

  @action addTodo = value => {
    this.todos.push(new Todo(value));
  };

  @action toggleFilterCompleted = () => {
    this.showCompleted = !this.showCompleted;
  };

  @action toggleTodo = id => {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  @action clearAll = () => {
    this.todos = [];
  };

  @computed get todoCount() {
    return this.todos.length;
  }

  @computed get filteredTodos() {
    return this.todos.filter(todo => this.showCompleted || todo.completed)
      .length > 0
      ? this.todos.filter(todo => this.showCompleted || todo.completed)
      : this.todos;
  }

  @computed get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
}

const store = new TodoStore();

export default store;
