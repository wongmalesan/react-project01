import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log(`Reg Comp Render ${this.props.name}`)
    return (
      <div>
        Reguler Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
