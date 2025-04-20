import React from 'react'
import { Tech } from './Tech'
import{ motion, stagger} from 'framer-motion'

const container = {
  hidden: { opacity: 0 , x: -100},
  visible: { opacity: 1, x: 0 },
  transition: { duration: 0.5, 
    staggerChildren: 0.2,
  }
}
 const children={
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0,transition: { duration: 0.5 } },
 }



const Hero = () => {
  return (
    <>
<div className='pb-4 lg:pb-36'>
    <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full  lg:w-1/2">
        <div className="flex justify-center lg:p-8">
            < motion.img src="./src/assets/profilepic.jpg" alt=""  className='border-0 border-stone-900 rounded-3xl initial={{x:100,opacity:0} } animate={{x:0,opacity:1} } transition={ {duration:1,delay:1.5}}' width={650} height={650}/>
        </div>
        </div>
        <div className="w-full lg:w-1/2">
        < motion.div initial="hidden" animate="visible" variants={container} className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 variants={children} className='pb-2 text-4xl tracking-tighter lg:text-8xl '>Shree Mandhare</motion.h2>
            <motion.span variants={children} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
            <motion.p variants={children} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
            Frontend Developer – Microsoft Copilot Summary As a highly skilled and innovative Frontend Developer, I specialize in creating seamless, user-focused web applications that blend cutting-edge technology with intuitive design. With a passion for crafting dynamic, responsive interfaces, I strive to enhance user experiences while maintaining exceptional performance standards.
            </motion.p>
        </motion.div>
        </div>
    </div>

</div>
<Tech/>
</>

  )
}

export default Hero