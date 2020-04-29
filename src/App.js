import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count : 0
    };
  }

  increment = () => {
    this.setState({count: this.state.count +1});
  }

  render(){
    return(
      <div>
        <button onClick={this.increment}>Increment</button>
        {this.state.count}
      </div>
    );
  }
}

export default App;
