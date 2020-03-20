import React, { useState } from 'react'
import Cake from './Cake';
import CakeForm from './CakeForm';

function CakeContainer() {
  const [cake, setCake] = useState([
    { id: 1, name: 'donut', price: 20 },
    { id: 2, name: 'birthday cake', price: 50 },
    { id: 3, name: 'rainbow cake', price: 35 },
  ]);

  const addCake = (newCake) => {
    newCake.id = cake.length + 1;
    let newCakes = [...cake, newCake];
    setCake(newCakes);
  }

  const deleteCake = (id) => {
    let cakes = cake.filter(cakess => {
      return cakess.id !== id
    });
    setCake(cakes);
  }

  return (
    <div>
      <h1 className="center purple-text">Cake List</h1>
      <p>Welcome :)</p>
      <Cake data={cake} deleteCake={deleteCake}/>
      <h1>Add Cake</h1>
      <CakeForm addCake={addCake} />
    </div>
  )
}

export default CakeContainer
