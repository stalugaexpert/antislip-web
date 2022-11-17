import { motion } from "framer-motion"

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 10
}

const whileTap = { scale: 0.95, rotate: 15 }

const raysVariants = {
  initial: { rotate: 45 },
  animate: { rotate: 0, transition }
}

const coreVariants = {
  initial: { scale: 1.5 },
  animate: { scale: 1, transition }
}

export const SunIcon = () => {
  return (
    <motion.svg
      fill="none"
      height="2em"
      key="sun"
      style={{ originX: "50%", originY: "50%" }}
      viewBox="0 0 24 24"
      whileTap={whileTap}
      width="2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        animate="animate"
        cx="11.9998"
        cy="11.9998"
        fill="currentColor"
        initial="initial"
        r="5.75375"
        variants={coreVariants}
      />
      <motion.g
        animate="animate"
        initial="initial"
        variants={raysVariants}
      >
        <circle
          cx="3.08982"
          cy="6.85502"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-60 3.08982 6.85502)"
        />
        <circle
          cx="3.0903"
          cy="17.1436"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-120 3.0903 17.1436)"
        />
        <circle
          cx="12"
          cy="22.2881"
          fill="currentColor"
          r="1.71143"
        />
        <circle
          cx="20.9101"
          cy="17.1436"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-60 20.9101 17.1436)"
        />
        <circle
          cx="20.9101"
          cy="6.8555"
          fill="currentColor"
          r="1.71143"
          transform="rotate(-120 20.9101 6.8555)"
        />
        <circle
          cx="12"
          cy="1.71143"
          fill="currentColor"
          r="1.71143"
        />
      </motion.g>
    </motion.svg>
  )
}
