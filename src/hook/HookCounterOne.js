import React, { useState, useEffect } from 'react'

function HookCounterOne() {
  // const [count, setCount] = useState(0);
  const [itemx, setItemx] = useState({
    count: 0,
    name: ''
  })

  useEffect(() => {
    console.log('useEffect - Updating document Title')
    document.title = `You Clicked ${itemx.count} times`
  }, [itemx.count])

  const countPlusOne = () => {
    setItemx({
      ...itemx,
      count: itemx.count + 1
    })
  }

  const onChangeName = (newName) => {
    setItemx({
      ...itemx,
      name:newName
    })
  }

  return (
    <div>
      <input type="text" value={itemx.name} onChange={e => onChangeName(e.target.value)}/>
      <h2>{itemx.name}</h2>
      <button onClick={countPlusOne}>Click {itemx.count} times</button>
    </div>
  )
}

export default HookCounterOne
