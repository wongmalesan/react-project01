import React from 'react'

function Cake({ data, deleteCake }) {
  const cakeList = data.map(cake => {
    return (
      <div key={cake.id}>
        <p>id : {cake.id}</p>
        <p>Name : {cake.name}</p>
        <p>Price : {cake.price}</p>
        <button onClick={() => { deleteCake(cake.id) }}>Delete Cake</button>
        <h2>============================</h2>
      </div>
    )
  })
  return (
    <div> 
      {cakeList}
    </div>
  )
}

export default Cake