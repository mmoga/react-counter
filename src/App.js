import React, { Component } from 'react';
import Email from './Email'; //"./" works because they are in the same folder
import LoginForm from './LoginForm';

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
       <div className="form-group">
       <label>
         Value:
       <input type="number" className="form-control" name="" id="" value={this.state.value} onChange={this.handleValueChange} />
       </label>
       </div>
       <button className="btn btn-primary" onClick={this.increment}>+</button>
       <button className="btn btn-primary" onClick={this.decrement}>-</button>
       <h1>{this.state.count}</h1>
       <button className="btn btn-lg btn-primary" onClick={this.reset}>Reset</button>
       <Email />
       <LoginForm />
     </div>
    );
  }
}

export default App;
