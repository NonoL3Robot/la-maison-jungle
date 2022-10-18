import React from 'react'
import PropTypes from 'prop-types'
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function indication(careType, scaleValue) {
  const type = careType === 'light'
    ? 'lumière'
    : 'arrossage'

  let value = ''
  switch (scaleValue) {
    case 1:
      value = 'peu'
      break
    case 2:
      value = 'modérément'
      break
    case 3:
      value = 'beaucoup'
      break
    default:
      value = ''
      break
  }
  return `Cette plante requiert ${value} de ${type}`
}

export default function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3]
  const scaleType = careType === 'light'
    ? (<img src={Sun} alt='sun-icon' />)
    : (<img src={Water} alt='water-icon' />)

  return (
    <div onClick={() => alert(indication(careType, scaleValue))}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem
          ? (<span key={rangeElem.toString()}>{scaleType}</span>)
          : null
      )}
    </div>
  )
}
CareScale.propTypes = {
  scaleValue: PropTypes.number.isRequired,
  careType: PropTypes.string.isRequired
}
