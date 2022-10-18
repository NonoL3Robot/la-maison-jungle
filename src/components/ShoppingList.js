import React from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

export default function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )
  return (
    <div>
      <ul>
          {categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
      </ul>
      <ul className='lmj-plant-list'>
          {plantList.map(({ name, cover, id, light, water }) => (
            <PlantItem
              key={id}
              id={id}
              name={name}
              cover={cover}
              light={light}
              water={water}
            />
          ))}
      </ul>
    </div>
  )
}
