import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from './Skill'
import { SiPowershell, SiCss3 } from 'react-icons/si'
import { BiLogoFigma, BiLogoReact, BiLogoSass, BiLogoJavascript, BiLogoTailwindCss, BiLogoGithub, BiLogoGit, BiLogoHtml5, BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

export const About = () => {
  const skills = [
    {
      text: 'figma',
      icon: <BiLogoFigma aria-hidden='true' />
    },
    {
      text: 'react',
      icon: <BiLogoReact aria-hidden='true' />
    },
    {
      text: 'javascript',
      icon: <BiLogoJavascript aria-hidden='true' />
    },
    {
      text: 'typescript',
      icon: <BiLogoTypescript aria-hidden='true' />
    },
    {
      text: 'sass',
      icon: <BiLogoSass aria-hidden='true' />
    },
    {
      text: 'html',
      icon: <BiLogoHtml5 aria-hidden='true' />
    },
    {
      text: 'git',
      icon: <BiLogoGit aria-hidden='true' />
    },
    {
      text: 'powershell',
      icon: <SiPowershell aria-hidden='true' />
    },
    {
      text: 'node.js',
      icon: <FaNodeJs aria-hidden='true' />
    },
    {
      text: 'css3',
      icon: <SiCss3 aria-hidden='true' />
    },
    {
      text: 'tailwindcss',
      icon: <BiLogoTailwindCss aria-hidden='true' />
    },
    {
      text: 'github',
      icon: <BiLogoGithub aria-hidden='true' />
    }
  ]

  return (
    <section id='about' className='about'>
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
        className='about__title'
      >
        About me
      </motion.h2>
      <p className='about__paragraph'>
        Hello everyone, I am Christian from <span>Veracruz</span>, <span>Mexico</span>. I am a student of the career of <span>Computer Technologies</span>.
      </p>
      <div className='about__grid'>
        <div className='about__know'>
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
            className='know__title'
          >
            Get to know me
          </motion.h3>
          <p className='know__paragraph'>
            In my spare time I like to research web technologies, such as <span>CSS</span>, <span>HTML5</span>, <span>JavaScript</span>, etc. Create static and accessible web pages with a simple and minimalist design, also learn new technologies.
          </p>
          <p className='know__paragraph'>
            My area of interest is the design and development of websites, an <span>accessible</span> and easy-to-use design.
          </p>
          <p className='know__paragraph'>
            Whenever I can, I also use my passion to develop projects using <span>Node.js</span> and <span>JavaScript</span> libraries and frameworks like <span>React</span>.
          </p>
        </div>
        <div className='about__skills'>
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
            className='skills__title'
          >
            MY SKILLS
          </motion.h3>
          <div className='skills__container'>
            {
              skills.map((skill, index) => (
                <Skill key={index} icon={skill.icon} text={skill.text} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
