import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		clicks: 0
	}
  IncrementItem = () => {
	  this.setState({ clicks: this.state.clicks + 1});
  }
  DecrementItem = () => {
	  this.setState({ clicks: this.state.clicks - 1});
  }
  render(){
	  return (
	  <div>
	  <h1> Counter:{this.state.clicks}</h1>
	  <button onClick={()=>this.setState({ clicks: this.state.clicks + 1})}>Click to increment by 1</button>
	  <button onClick={()=>this.setState({ clicks: this.state.clicks - 1})}>Click to decrement by 1</button>
      </div>
    );
  }
}

export default App;