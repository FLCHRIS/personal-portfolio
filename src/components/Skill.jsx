import React from 'react'
import PropTypes from 'prop-types'
import Atropos from 'atropos/react'

export const Skill = ({ icon, text }) => {
  return (
    <Atropos
      shadow={false}
      highlight={false}
    >
      <p className='skill'>
        {icon}
        {text}
      </p>
    </Atropos>
  )
}

Skill.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string
}
