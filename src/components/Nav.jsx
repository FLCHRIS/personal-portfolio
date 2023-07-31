import React from 'react'
import PropTypes from 'prop-types'

export const Nav = ({ isOpen }) => {
  return (
    <nav className={isOpen ? 'nav nav__show' : 'nav'}>
      <ul className='nav__list'>
        <li className='nav__item'><a href='/' className='nav__cta'>home</a></li>
        <li className='nav__item'><a href='#about' className='nav__cta'>about</a></li>
        <li className='nav__item'><a href='#projects' className='nav__cta'>projects</a></li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  isOpen: PropTypes.bool
}
