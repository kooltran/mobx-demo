export default class TodoList {
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

    toggleComplete = (todo) => {
        todo.completed = !todo.completed
    }

    render() {
        const { TodoStore } = this.props;
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
                    {TodoStore.todos.map(todo => {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.completed} onChange={this.toggleComplete.bind(this, todo)} />
                                {todo.value}
                            </li>
                        )
                    })}
                </ul>
                <button onClick={TodoStore.clearCompleted}>Clear completed</button>
            </div>
        );
    }
}