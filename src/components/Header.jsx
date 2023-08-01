import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Atropos from 'atropos/react'
import { Cross as Hamburger } from 'hamburger-react'
import { Logo } from './Logo'
import { BiSun, BiMoon } from 'react-icons/bi'
import { Nav } from './Nav'

export const Header = () => {
  const THEMES = {
    light: 'light',
    dark: 'dark'
  }
  const [isOpen, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme') || THEMES.light
    document.documentElement.classList.add(initialTheme)
    return initialTheme
  })

  const handleTheme = () => {
    if (theme === THEMES.light) {
      setTheme(THEMES.dark)
      localStorage.setItem('theme', THEMES.dark)
      document.documentElement.classList.add(THEMES.dark)
      document.documentElement.classList.remove(THEMES.light)
    } else {
      setTheme(THEMES.light)
      localStorage.setItem('theme', THEMES.light)
      document.documentElement.classList.add(THEMES.light)
      document.documentElement.classList.remove(THEMES.dark)
    }
  }

  return (
    <header className='header'>
      <div className='header__top'>
        <a href='/' aria-label='Go to home'>
          <Atropos
            shadow={false}
          >
            <Logo THEMES={THEMES} theme={theme} />
          </Atropos>
        </a>
        <Nav isOpen={isOpen} />
        <div className='header__action'>
          <button aria-label='Change theme' className='header__theme' onClick={handleTheme}>
            {
              theme !== THEMES.light
                ? (
                  <BiSun />
                  )
                : (
                  <BiMoon />
                  )
            }
          </button>
          <div className='header__menu'>
            <Hamburger toggled={isOpen} toggle={setOpen} color={theme === THEMES.light ? '#171717' : '#FFFFFF'} />
          </div>
        </div>
      </div>
      <div className='header__bottom'>
        <motion.h1
          initial={{
            translateY: -50,
            opacity: 0
          }}
          whileInView={{
            translateY: 0,
            opacity: 1
          }}
          transition={{
            duration: 1
          }}
          className='header__title'
        >
          Hi there! I'm <span>Christian</span>
        </motion.h1>
        <p className='header__paragraph'>
          Web developer passionate about front-end development and design. Currently a third year student at UV. Aspiring for a career that allows me to channel my creativity, creating beautiful software and engaging experiences.
        </p>
        <div className='header__cta'>
          <a href='#projects' className='header__link'>
            Projects
          </a>
          <div className='cta__effect' />
        </div>
      </div>
    </header>
  )
}
