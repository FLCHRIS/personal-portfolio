import React from 'react'
import Atropos from 'atropos/react'
import PropTypes from 'prop-types'
import { IoIosArrowForward } from 'react-icons/io'
import { Skill } from './Skill'

export const Project = ({ image, title, view, code, build }) => {
  return (
    <article className='card'>
      <Atropos
        shadow={false}
        highlight={false}
      >
        <img src={image} alt={title} role='presentation' />
      </Atropos>
      <div className='card__data'>
        <h2 className='card__title'>Website: {title}</h2>
        <div className='card__container'>
          <a href={view} target='_blank' rel='noreferrer' className='card__ctas'>
            View Project <IoIosArrowForward />
          </a>
          <a href={code} target='_blank' rel='noreferrer' className='card__ctas'>
            View Code <IoIosArrowForward />
          </a>
        </div>
        <div className='card__skills'>
          {
          build.map((skill, index) => (
            <Skill key={index} icon={skill.icon} text={skill.text} />
          ))
        }
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  view: PropTypes.string,
  code: PropTypes.string,
  build: PropTypes.array
}
