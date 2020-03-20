import React, { useState } from 'react'

function CakeForm(props) {
  const [newCake, setNewCake] = useState({id:0, name: '', price: 0 });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.addCake(newCake);
  }

  const onChangeHandler = (e) => {
    setNewCake({
      ...newCake,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Cake Name</label>
        <input type="text" id="name" value={newCake.name} onChange={onChangeHandler} />
        <label>Price</label>
        <input type="number" id="price" value={newCake.price} onChange={onChangeHandler} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default CakeForm