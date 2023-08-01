import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className='footer'>
      <motion.p
        initial={{
          translateY: 50,
          opacity: 0
        }}
        whileInView={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
        className='footer__copy'
      >
        Copyright 2023 Christian FL
      </motion.p>
      <motion.p
        initial={{
          translateY: 50,
          opacity: 0
        }}
        whileInView={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          delay: 0.5,
          duration: 1
        }}
        className='footer__build'
      >
        Development with <AiFillHeart aria-hidden='true' className='footer__icon' /> by
        <a href='https://github.com/FLCHRIS' target='_blank' rel='noreferrer'> flchris</a>
      </motion.p>
    </footer>
  )
}
