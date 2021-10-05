import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'Hello Tina'
    }
  }

  render() {
    return (
      <div>
    <h1>{this.state.string}</h1>
    <button onClick={() => this.setState({ string: 'Hello You' })}>Change Text</button>
    </div>
    )
  }
}

export default App;
