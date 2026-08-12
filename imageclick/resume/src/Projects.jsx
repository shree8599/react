import React from 'react'
import { motion, useInView } from 'framer-motion' // Add useInView import
import { PROJECTS } from '../constants'
import Experience from './Experience'

export const Projects = () => {
  return (
    <>
      <motion.div 
        className='pb-4'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className='my-20 text-center text-4xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
      <Experience />
    </>
  )
}

// Create a separate component for each project card
const ProjectCard = ({ project, index }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      className='mb-8 flex flex-wrap lg:justify-center'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div 
        className='w-full lg:w-1/4'
        whileHover={{ scale: 1.05 }}
      >
        <img src={project.image} alt={project.title} width={250} height={250} className='mb-6 rounded' />
      </motion.div>
      <motion.div 
        className='w-full max-w-xl lg:w-3/4'
      >
        <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
        <p className='mb-4 text-stone-400'>{project.description}</p>
        {project.technologies.map((tech, techIndex) => (
          <motion.span 
            key={techIndex} 
            className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
