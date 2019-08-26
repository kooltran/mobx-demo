import React from "react";
import { inject, observer } from "mobx-react";

@inject("CatStore")
@observer
class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const cat = this.catInput.value;
    this.props.CatStore.addCat(cat);
    this.catInput.value = "";
  };

  render() {
    const { CatStore } = this.props;
    console.log(CatStore);
    return (
      <div>
        <h2>You have {CatStore.catCount} cats</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter cat"
            ref={input => (this.catInput = input)}
          />
          <button>Add Cat</button>
        </form>

        <ul>
          {CatStore.cats.map(cat => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
