import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  render() {
    // you can return only one HTML element per render, hence <div>
    return (
     <div>
       <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
       <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
       <h1>{this.state.count}</h1>
     </div>
    );
  }
}

export default App;
