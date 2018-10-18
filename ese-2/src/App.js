import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
      parola: '',
      immagine: ''
    }

  onChange = (event) => {
    this.setState({ parola: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.parola}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ parola:'', immagine: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.parola} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        <immagine src={this.state.immagine} height="200" alt={this.state.parola} />
      </div>
    );
  }
}

export default App;

