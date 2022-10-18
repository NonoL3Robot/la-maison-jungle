import { React, useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import PropTypes from 'prop-types'
import '../styles/ShoppingList.css'

export default function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')
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
      <Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
      <ul className='lmj-plant-list'>
          {plantList.map(({ name, cover, id, light, water, price, category }) =>
            !activeCategory || activeCategory === category
              ? (
              <div key={id}>
                <PlantItem key={id} id={id} name={name} cover={cover} light={light} water={water} price={price} />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
              </div>
                )
              : null
          )}
      </ul>
    </div>
  )
}
ShoppingList.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
}
