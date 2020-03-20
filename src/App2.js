import React from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

const nodeStyle = {
  color: 'red',
  fontWeight: 'bold'
};

class App2 extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };

  setStateHandler() {
    var item = "setState...";
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({ data: myArray });
  };

  forceUpdateHandler() {
    this.forceUpdate();
  }

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    myDiv.style.color = 'red';
    myDiv.style.fontWeight = 'bold';
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
        <button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
        <h4>State Array: {this.state.data}</h4>
        <h4>Random number: {Math.random()}</h4>
        <div id="myDiv">NODE</div>
      </React.Fragment>
    );
  }
}

export default App2;
