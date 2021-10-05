import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          name: 'Shirley',
          id: 'asc1'
        },
        {
          name: 'Christopher',
          id: 'asr4'
        },
        {
          name: 'Dana',
          id: 'ast6'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.contacts.map(contact => <h1 key={contact.id}> { contact.name } </h1>)}
      </div>
    );
  }
}

export default App;
