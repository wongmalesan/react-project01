import React, { Component } from 'react';

class Message extends Component {

  constructor() {
    super();
    this.state = {
      message: 'Welcome Visitor'
    };
  }

  ChangeMessage() {
    this.setState({
      message: 'Thank you for subscribing'
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.ChangeMessage()}>Subscribe</button>
      </React.Fragment>
    );
  }
}

export default Message;