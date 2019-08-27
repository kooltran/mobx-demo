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
    return (
      <div>
        <h2>You have {TodoStore.todoCount} todo(s)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter cat"
            onChange={this.handleChange}
            value={inputValue}
          />
          <button disabled={!inputValue}>Add Cat</button>
        </form>

        <ul>
          {TodoStore.filteredTodos.map(todo => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => TodoStore.toggleTodo(todo.id)}
                />
                {todo.value}
              </li>
            );
          })}
        </ul>
        <label>
          <input
            type="checkbox"
            checked={!TodoStore.showCompleted}
            onChange={TodoStore.toggleFilterCompleted}
          />
          Toggle Checkbox
        </label>
        <button onClick={TodoStore.clearAll}>Clear All</button>
      </div>
    );
  }
}

export default TodoList;
