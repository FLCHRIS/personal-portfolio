import React from 'react'
import { About } from './About'
import { Do } from './Do'
import { Projects } from './Projects'

export const Main = () => {
  return (
    <main className='main'>
      <About />
      <Do />
      <Projects />
    </main>
  )
}
