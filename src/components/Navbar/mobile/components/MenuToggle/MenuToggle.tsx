import { motion } from 'framer-motion'

interface IPathProps {
  openPath: string
  closedPath: string
}

interface IMenuToggleProps {
  toggle(): void
}

const Path = ({ openPath, closedPath, ...rest }: IPathProps) => {
  return (
    <motion.path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 }},
        closed: { d: closedPath, transition: { duration: 0.3 }},
      }}
      {...rest}
    ></motion.path>
  )
}

export const MenuToggle = ({ toggle }: IMenuToggleProps) => {
  return (
    <button
      className="border-0 outline-none z-50 text-neutral700 dark:text-neutral200 p-3"
      onClick={toggle}
    >
      <svg
        height="32"
        viewBox="-2 -4 25 23"
        width="32"
      >
        <Path
          closedPath="M 2 2.5 L 20 2.5"
          openPath="M 3 16.5 L 17 2.5"
        />
        <Path
          closedPath="M 2 9.423 L 20 9.423"
          openPath=""
        />
        <Path
          closedPath="M 2 16.346 L 20 16.346"
          openPath="M 3 2.5 L 17 16.346"
        />
      </svg>
    </button>
  )
}
