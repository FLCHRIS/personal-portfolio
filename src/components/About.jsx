import React from 'react'
import { Skill } from './skill'
import { SiPowershell, SiCss3 } from 'react-icons/si'
import { BiLogoFigma, BiLogoReact, BiLogoSass, BiLogoJavascript, BiLogoTailwindCss, BiLogoGithub, BiLogoGit, BiLogoHtml5 } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

export const About = () => {
  const skills = [
    {
      text: 'figma',
      icon: <BiLogoFigma />
    },
    {
      text: 'react',
      icon: <BiLogoReact />
    },
    {
      text: 'sass',
      icon: <BiLogoSass />
    },
    {
      text: 'html',
      icon: <BiLogoHtml5 />
    },
    {
      text: 'git',
      icon: <BiLogoGit />
    },
    {
      text: 'powershell',
      icon: <SiPowershell />
    },
    {
      text: 'node.js',
      icon: <FaNodeJs />
    },
    {
      text: 'css3',
      icon: <SiCss3 />
    },
    {
      text: 'github',
      icon: <BiLogoGithub />
    },
    {
      text: 'tailwindcss',
      icon: <BiLogoTailwindCss />
    },
    {
      text: 'javascript',
      icon: <BiLogoJavascript />
    }
  ]

  return (
    <section className='about'>
      <h2 className='about__title'>About me</h2>
      <p className='about__paragraph'>
        Hello everyone, I am Christian from <span>Veracruz</span>, <span>Mexico</span>. I am a student of the career of <span>Computer Technologies</span>.
      </p>
      <div className='about__grid'>
        <div className='about__know'>
          <h3 className='know__title'>
            Get to know me
          </h3>
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
          <h3 className='skills__title'>
            MY SKILLS
          </h3>
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