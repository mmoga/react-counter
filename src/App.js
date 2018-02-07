import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      value: 0
    }
    this.increment = this.increment.bind(this); //binding means inside of "increment"                                                //the "this" keyword is the component
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  increment(){
    this.setState({count: this.state.count + this.state.value})
  }
  decrement(){
    this.setState({count: this.state.count - this.state.value})
  }
  reset(){
    this.setState({count: 0})
  }
  handleValueChange(e){
    this.setState({value: +e.target.value}) // the unary operator "+" makes the number string a number
  }
  render() {
    // you can return only one HTML element per render, hence <div>
    return (
     <div>
       <label>
         Value:
       <input type="number" name="" id="" value={this.state.value} onChange={this.handleValueChange} />
       </label>
       <button onClick={this.increment}>+</button>
       <button onClick={this.decrement}>-</button>
       <h1>{this.state.count}</h1>
       <button onClick={this.reset}>Reset</button>
     </div>
    );
  }
}

export default App;
