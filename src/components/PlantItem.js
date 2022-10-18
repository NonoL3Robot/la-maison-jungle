import React from 'react'
import CareScale from './CareScale'
import PropTypes from 'prop-types'
import '../styles/PlantItem.css'

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default function PlantItem({ name, cover, id, light, water, price }) {
  return (
    <li key={id} className='lmj-plant-item'>
      <span className='lmj-plant-item-price'>{price}€</span>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)}/>
      {name}
      <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
      </div>
    </li>
  )
}
PlantItem.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  light: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}
