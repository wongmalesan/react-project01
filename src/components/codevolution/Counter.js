import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    // this.setState({
    //     count: this.state.count + 1
    // }, () => {
    //     console.log('Callback Value', this.state.count)}
    // )
    // //it will run first before setState
    // console.log(this.state.count);

    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  onClick1() {
    console.log(this);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          count - {this.state.count}
        </div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={this.onClick1.bind(this)}>Click Me</button>
      </React.Fragment>
    )
  }
}

export default Counter
