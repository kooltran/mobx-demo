import React from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class App extends React.Component {

  state = {
    inputValue: ''
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = e => {
    const { inputValue } = this.state;
    e.preventDefault();
    this.props.TodoStore.addTodo(inputValue);
    this.setState({
      inputValue: ''
    })
  };


  render() {
    const { TodoStore } = this.props;
    const { inputValue } = this.state;
    console.log()
    return (
      <div>
        <h2>You have {TodoStore.todoCount} cats</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter cat"
            onChange={this.handleChange}
            value={inputValue}
          />
          <button>Add Cat</button>
        </form>

        <ul>
          {TodoStore.todos.map(todo => {
            console.log(todo.completed)
            return (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={() => todo.completed = !todo.completed} />
                {todo.value}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
