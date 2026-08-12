import React from 'react'
import {  FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandTailwind } from 'react-icons/tb'
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Projects } from './Projects'
import { animate, easeIn, motion } from 'framer-motion'

const icons = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 0.5,
    }
  }
})

export const Tech = () => {
  return (
    <>
    
    <div className='pb-24'>
        <motion.h2 whileInView={ {opacity:1,y:0}} initial={ {opacity:0,y:-100}} 
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={ {opacity:0,x:-100}}
        transition={{duration:1.5}}
        
        className="flex flex-wrap items-center justify-center gap-4">
        <div className="">
                <TfiHtml5 className='text-8xl text-red-700'/>
                </div>

                <div className="">
                <FaCss3 className='text-8xl text-cyan-400'/>
                </div>

                <div className="">
                <TbBrandNextjs className='text-8xl text-400'/>
            </div>
            <div className="d">
                <FaNodeJs className='text-8xl text-green-500'/>
                </div>

            <div className="">
                <RiReactjsLine className='text-8xl text-cyan-400'/>
            </div>
           
            <div className="">
               <SiMongodb className='text-8xl text-green-500' />
               </div>
            <div className="">
                <TbBrandTailwind className='text-8xl text-cyan-400'/>
                </div>
              
              
               

            
        </motion.div>




    </div>
    <Projects />
    </>
  )
}
