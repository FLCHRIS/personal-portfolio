import React from 'react'
import PropTypes from 'prop-types'

export const Skill = ({ icon, text }) => {
  return (
    <p className='skill'>
      {icon}
      {text}
    </p>
  )
}

Skill.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string
}
