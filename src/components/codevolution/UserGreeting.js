import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }


  render() {

    // if only true will give return
    return this.state.isLoggedIn && <div>Welcome home</div>

    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Home</div> :
    //     <div>Welcome Guest</div>
    // );

    // let message;
    // if(this.state.isLoggedIn){
    //     message = <div>You Have Login</div>
    // } else{
    //     message = <div>Welcome Home</div>
    // }

    // return message;

    // return (
    //     <React.Fragment>
    //         <div>Welcome Home</div>
    //         <div>You Have Login</div>
    //     </React.Fragment>
    // )
  }
}

export default UserGreeting
