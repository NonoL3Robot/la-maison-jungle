import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Categories.css'

export default function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className='lmj-categories'>
      <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className='lmj-categories-select'>
        <option value=''>---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  )
}
Categories.propTypes = {
  setActiveCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired
}
