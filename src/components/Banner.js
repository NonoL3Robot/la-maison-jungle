import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Banner.css'

export default function Banner({ children }) {
  return (
    <div className='lmj-banner'>
      {children}
    </div>
  )
}
Banner.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
