import React, {useState} from 'react'

function HookCounterTwo() {
  const [count, setCount] = useState(0);

  // const setIncrement = numOfCount => {
  //     setCount(prevState => prevState + numOfCount);
  // }

  const setDecrement = numOfCount => {
      setCount(count + numOfCount);
  }

  console.log('object')
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={setDecrement(2)}>+</button>
      <button onClick={() => setCount(prevState => prevState - 3)}>-</button>
    </div>
  )
}

export default HookCounterTwo
