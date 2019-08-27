import React from "react";
// import { inject, observer } from "mobx-react";
import TodoList from "./TodoList";

// @inject("TodoStore")
// @observer
class App extends React.Component {
  render() {
    return <TodoList />;
  }
}

export default App;
