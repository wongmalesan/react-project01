import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    function doSomeThing(){
      console.log('someProp');
    }
    doSomeThing();
    const interval = setInterval(tick, 100);
    return () => {
      clearInterval(interval);
    }
  },[]);

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter