import React from 'react'
import { EXPERIENCES } from '../constants/index'
import Contact from './Contact'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <>
        <motion.div 
            ref={ref}
            className='pb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className='my-20 text-center text-4xl'>Experience</h2>
            <div>
            {EXPERIENCES.map((experience, index) => (
                <motion.div 
                    key={index} 
                    className='mb-8 flex flex-wrap lg:justify-center'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="w-full lg:w-1/4">
                    <p className='mb-2 text-sm text-stone-400'>{experience.year}</p>
                    </div>
                    <div className='w-full max-w-xl lg:3/4'>
                    <h3 className='mb-2 font-semibold'>
                        {experience.role} -{' '}
                        <span className='text-stone-500'>{experience.company}</span>
                    </h3>
                    <p className='mb-4 text-stone-400'>{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                        <motion.span 
                            key={index} 
                            className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300'
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                    </div>
                </motion.div>
            ))}
            </div>
        </motion.div>
        <Contact/>
        </>
    )
}

export default Experience