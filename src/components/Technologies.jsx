import { FaNodeJs } from 'react-icons/fa6'
import { RiReactjsLine } from 'react-icons/ri'
import { SiGit, SiMysql, SiPhp, SiPostman, SiPython, SiReactbootstrap, SiVite, SiWebpack } from 'react-icons/si'
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: { 
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})

const Technologies = () => {
  return (
    <div className='pb-24 mx-5' >
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="flex flex-wrap text-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
            >
                <RiReactjsLine className='text-7xl text-cyan-300'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className='p-4'>
                <FaNodeJs className='text-7xl text-green-600'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className='p-4'>
                <SiMysql className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className='p-4'>
                <SiPhp className='text-7xl text-blue-900'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className='p-4'>
                <SiWebpack className='text-7xl text-blue-300'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className='p-4'>
                <SiPython className='text-7xl text-blue-900'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className='p-4'>
                <SiVite className='text-7xl text-yellow-200'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className='p-4'>
                <SiPostman className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className='p-4'>
                <SiGit className='text-7xl text-red-600'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies