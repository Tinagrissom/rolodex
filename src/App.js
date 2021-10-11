import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
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
        <CardList name="Tina">
          {this.state.contacts.map((contact) => (
            <h1 key={contact.id}> {contact.name} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
