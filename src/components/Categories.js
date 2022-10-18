import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Categories.css'

export default function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <select>
      <option></option>
    </select>
  )
}
Categories.propTypes = {
  setActiveCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.any.isRequired
}
