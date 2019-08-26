import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import TodoStore from "./stores/TodoStore";

ReactDOM.render(
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);