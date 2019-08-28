import React from "react";
import TodoStore from "./stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoList extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSubmit = e => {
    const { inputValue } = this.state;
    e.preventDefault();
    TodoStore.addTodo(inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    const { inputValue } = this.state;
    const {
      todoCount,
      filteredTodos,
      showCompleted,
      toggleFilterCompleted,
      clearAll,
      toggleTodo,
      completedCount
    } = TodoStore;
    return (
      <div className="container">
        <h2>You have {todoCount} todo(s)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter todo"
            onChange={this.handleChange}
            value={inputValue}
          />
          <button disabled={!inputValue}>Add Todo</button>
        </form>

        <ul className="todo-list">
          {filteredTodos.map(todo => {
            return (
              <li key={todo.id}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.value}</span>
                </label>
              </li>
            );
          })}
        </ul>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={!showCompleted}
            onChange={toggleFilterCompleted}
          />
          <span>Toggle Completed</span>
        </label>
        <button onClick={clearAll}>Clear All</button>
        <div>
          You have {completedCount}/{todoCount} completed todo
        </div>
      </div>
    );
  }
}

export default TodoList;
