import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      commnets: '',
      topic: 'angular'
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handleCommentsChange = event => {
    this.setState({
      commnets: event.target.value
    });
  }

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  }

  handleSubmit = event => {
    alert(`${this.state.username} -- ${this.state.commnets} -- ${this.state.topic} `);
    event.preventDefault();
  }

  render() {
    const { username, commnets, topic } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>Form Component</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username :</label>
            <input type='text' value={username} onChange={this.handleUsernameChange} />
          </div>
          <div>
            <label>Comments</label>
            <textarea value={commnets} onChange={this.handleCommentsChange}></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type='submit'>submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Form
