import React from 'react'
import { BiCodeBlock, BiCodeAlt } from 'react-icons/bi'

export const Do = () => {
  return (
    <section className='do'>
      <h2 className='do__title'>
        What I do
      </h2>
      <div className='do__grid'>
        <div className='do__container'>
          <h3 className='do__subtitle'>
            <BiCodeBlock aria-hidden='true' />
            Web development
          </h3>
          <p className='do__paragraph'>
            Using <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span> with <span>pre-processors</span> and build tools such as <span>Sass</span>, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
          </p>
        </div>
        <div className='do__container'>
          <h3 className='do__subtitle'>
            <BiCodeAlt aria-hidden='true' />
            Responsive UI design
          </h3>
          <p className='do__paragraph'>
            I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.
          </p>
        </div>
      </div>
    </section>
  )
}
