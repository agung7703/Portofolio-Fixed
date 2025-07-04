import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import logo from "../assets/Logo.webp"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-items-center justify-between py-6 mx-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-shrink-0 items-center"
        variants={containerVariants}
      >
        <motion.a variants={itemVariants} href="/" className="Home">
          <img src={logo} alt="Logo" className="mx-2" width={120} />
        </motion.a>
      </motion.div>
      <motion.div
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        variants={containerVariants}
      >
        <motion.a
          href="https://www.linkedin.com/in/agungmaulanasaputra/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          variants={itemVariants}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/agung7703"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          variants={itemVariants}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/agung_maulanass/?hl=id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          variants={itemVariants}
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
