import React from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import PropTypes from 'prop-types'
import '../styles/ShoppingList.css'

export default function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  )

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className='lmj-shopping-list'>
      <ul>
          {categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
      </ul>
      <ul className='lmj-plant-list'>
          {plantList.map(({ name, cover, id, light, water, price }) => (
            <div key={id}>
              <PlantItem key={id} id={id} name={name} cover={cover} light={light} water={water} price={price} />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ))}
      </ul>
    </div>
  )
}
ShoppingList.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
}
