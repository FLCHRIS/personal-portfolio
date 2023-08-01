import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__copy'>
        Copyright 2023 Christian FL
      </p>
      <p className='footer__build'>
        Development with <AiFillHeart aria-hidden='true' className='footer__icon' /> by
        <a href='https://github.com/FLCHRIS' target='_blank' rel='noreferrer'> flchris</a>
      </p>
    </footer>
  )
}
