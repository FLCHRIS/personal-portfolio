import React from 'react'
import { Project } from './Project'
import { motion } from 'framer-motion'
import dfpreview from '../assets/dfpreview.png'
import hlppreview from '../assets/hlppreview.png'
import smdpreview from '../assets/smdpreview.png'
import burgerpreview from '../assets/burgerpreview.png'
import { BiLogoReact, BiLogoTailwindCss, BiLogoSass, BiLogoTypescript } from 'react-icons/bi'
import { SiVite, SiYarn } from 'react-icons/si'

export const Projects = () => {
  const projects = [
    {
      image: dfpreview,
      title: 'Delicious food landing page',
      view: 'https://delifoodc.netlify.app/',
      code: 'https://github.com/FLCHRIS/d-food',
      build: [
        {
          text: 'Tailwindcss',
          icon: <BiLogoTailwindCss aria-hidden='true' />
        },
        {
          text: 'React',
          icon: <BiLogoReact aria-hidden='true' />
        },
        {
          text: 'Vite',
          icon: <SiVite aria-hidden='true' />
        }
      ]
    },
    {
      image: hlppreview,
      title: 'Huddle landing page',
      view: 'https://effulgent-brigadeiros-e3069d.netlify.app/',
      code: 'https://github.com/FLCHRIS/huddle-landing-page-with-curved-sections-master',
      build: [
        {
          text: 'Tailwindcss',
          icon: <BiLogoTailwindCss aria-hidden='true' />
        },
        {
          text: 'React',
          icon: <BiLogoReact aria-hidden='true' />
        },
        {
          text: 'Vite',
          icon: <SiVite aria-hidden='true' />
        }
      ]
    },
    {
      image: smdpreview,
      title: 'Social media dashboard',
      view: 'https://lucky-gingersnap-2f271b.netlify.app/',
      code: 'https://github.com/FLCHRIS/Social-media-dashboard-with-theme-switcher',
      build: [
        {
          text: 'TailwindCSS',
          icon: <BiLogoTailwindCss aria-hidden='true' />
        },
        {
          text: 'React',
          icon: <BiLogoReact aria-hidden='true' />
        },
        {
          text: 'Vite',
          icon: <SiVite aria-hidden='true' />
        }
      ]
    },
    {
      image: burgerpreview,
      title: 'Burger time',
      view: 'https://breakfasttimeandburger.netlify.app/',
      code: 'https://github.com/FLCHRIS/burger-time',
      build: [
        {
          text: 'SCSS',
          icon: <BiLogoSass aria-hidden='true' />
        },
        {
          text: 'TypeScript',
          icon: <BiLogoTypescript aria-hidden='true' />
        },
        {
          text: 'Yarn',
          icon: <SiYarn aria-hidden='true' />
        },
        {
          text: 'React',
          icon: <BiLogoReact aria-hidden='true' />
        }
      ]
    }
  ]

  return (
    <section id='projects' className='projects'>
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
        className='projects__title'
      >
        Projects
      </motion.h2>
      <p className='projects__paragraph'>
        Here you will find some of the personal projects I have worked on recently, with a brief description of why I did it and what are the tools I used to create it.
      </p>
      <div className='projects__grid'>
        {projects.map((project, index) => (
          <Project key={index} code={project.code} view={project.view} image={project.image} title={project.title} build={project.build} />
        ))}
      </div>
    </section>
  )
}
