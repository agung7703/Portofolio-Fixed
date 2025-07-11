import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div className='pb-4 mx-5'>
      <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity:0, y:-100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Education</motion.h2>
      <div>
          {EDUCATION.map((education, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                   <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="w-full lg:w-1/4">
                       <img src={education.image} width={250} height={250} alt={education.institution} className='mb-6 rounded'/>
                   </motion.div>
                  <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4">
                       <h3 className="mb-2 font-semibold text-2xl">{education.institution}</h3>
                       <p className="mb-4">{education.degree}</p>
                       <p className="mb-4 text-stone-400">{education.description}</p>
                       <p className="mb-4 text-stone-400">Grade : {education.grade}</p>
                  </motion.div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Education