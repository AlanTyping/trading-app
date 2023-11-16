import * as React from "react";
import { motion } from 'framer-motion'

const icon = {
  hidden: { pathLength: 0, opacity: 0, },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
}

const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-[60px] w-[60px] lg:h-[6vw] lg:w-[6vw]"
  >
    <motion.path
      stroke="#003db9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V3m4 12 5-6 4 4 5-6"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>
)
export default SvgComponent
