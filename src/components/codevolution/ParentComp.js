import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

  constructor(props) {
    super(props)
    // this.i = 0;
    this.state = {
      name: 'heellooo'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        // name:`heellooo ${this.i}`
        name: 'heellooo'
      });
      // this.i = this.i + 1;
    }, 2000)
  }

  render() {
    console.log('==================Parent Component Render================')
    return (
      <div>
        Parent Component
                <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
