import React from 'react';

// function Greet(){
//     return <h1>Hello World</h1>
// }

const Greet = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <h1>Hello {props.name}</h1>
      {props.children}
    </React.Fragment>
  );
}

export default Greet;