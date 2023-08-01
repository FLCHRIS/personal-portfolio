import React from 'react'
import { motion } from 'framer-motion'
import { BiCodeBlock, BiCodeAlt } from 'react-icons/bi'

export const Do = () => {
  return (
    <section className='do'>
      <motion.h2
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
        className='do__title'
      >
        What I do
      </motion.h2>
      <div className='do__grid'>
        <div className='do__container'>
          <motion.h3
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
            className='do__subtitle'
          >
            <BiCodeBlock aria-hidden='true' />
            Web development
          </motion.h3>
          <p className='do__paragraph'>
            Using <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span> with <span>pre-processors</span> and build tools such as <span>Sass</span>, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
          </p>
        </div>
        <div className='do__container'>
          <motion.h3
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
            className='do__subtitle'
          >
            <BiCodeAlt aria-hidden='true' />
            Responsive UI design
          </motion.h3>
          <p className='do__paragraph'>
            I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.
          </p>
        </div>
      </div>
    </section>
  )
}
