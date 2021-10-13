import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ contacts: users }));
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="search contacts"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

          // setState is an asynchronous function call
          // synchronous is an action that happens almost immediately
          // asynchronous takes an indefinite amount of time, so the rest of the code will
          // run and then JavaScript will execute the asynchronous function
