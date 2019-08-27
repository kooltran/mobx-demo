import React from "react";
// import { inject, observer } from "mobx-react";
import TodoList from "./TodoList";
import GalleryView from './GalleryView'

// @inject("TodoStore")
// @observer
class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
        <GalleryView />
      </div>
    )
  }
}

export default App;
