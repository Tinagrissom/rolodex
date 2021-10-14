import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBar } from "./components/search-bar/search-bar.component";

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
    const { contacts, searchField } = this.state;
    // destructuring in order to pull values and set to a const
    // same as
    // const contacts = this.state.contacts

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <SearchBar
          placeholder="search contacts"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;

// setState is an asynchronous function call
// synchronous is an action that happens almost immediately (JS knows how long it will take)
// asynchronous takes an indefinite amount of time, so the rest of the code will
// run and then JavaScript will execute the asynchronous function

// React has synthetic events - when a DOM event happens, react will intercept
// onChange is an example of a synthetic event through react
