import profilePic from '../assets/Profile.webp'
import {HERO_CONTENT} from '../constants/index'
import { motion } from 'framer-motion'

const containerVariants ={
    hidden: {opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

const HeroSection = () => {
  return (
    <div className="pb-4 mx-5 lg:mb-36">
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center-lg:p-8">
                    <motion.img 
                      src={profilePic} 
                      alt="Agung Maulana Saputra" 
                      className='border border-stone-900 rounded-3xl' 
                      width={650} 
                      height={650} 
                      whileInView={{ opacity:1, x:0 }}
                      initial={{ opacity: 0, x:100 }} 
                      viewport={{ once: false }} 
                      transition={{duration: 1}} 
                    />
                </div>
            </div>
            <div className='Detail w-full lg:w-1/2'>
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false }} 
                  variants={containerVariants} 
                  className='flex flex-col items-center lg:items-start mt-10'
                >
                    <motion.h2 whileInView="visible" initial="hidden" viewport={{ once: false }} variants={childVariants} className='pb-2 text-4xl tracking-tighter'>Agung Maulana Saputra</motion.h2>
                    <motion.span variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'>Full Stack Developer</motion.span>
                    <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl loading-relaxed tracking-tighter">{HERO_CONTENT}</motion.p>
                    <motion.a 
                      variants={childVariants} 
                      href="https://drive.google.com/file/d/1t_EJxYRZ5MkXnEAR2lnOxwglYkCYh0zR/view?usp=sharing"
                      target='_blank'
                      rel='noopener noreferrer'
                      download
                      className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-slate-500 hover:text-slate-100'
                    >
                      Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
