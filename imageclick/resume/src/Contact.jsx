import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='border-1 border-stone-900 pb-20'
    >
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='my-10 text-center text-4xl'
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className='text-center tracking-tighter'
        >
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className='my-4'
            >
                If you would like to get in touch, feel free to reach out via email <br />
                <br />
                Email me at : <a href='mailto:shreemandhare5087@gmail.com' className='text-stone-400 underline' >shreemandhare5087@gmail.com</a>.
                <br />
                 or connect with me on LinkedIn.
            </motion.p>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className='my-4'
            >
              Contact: 8459549458
            </motion.p>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className='my-4'
            >
              Address: Pune,Maharashtra
            </motion.p>
        </motion.div>
    </motion.div>
  )
}

export default Contact