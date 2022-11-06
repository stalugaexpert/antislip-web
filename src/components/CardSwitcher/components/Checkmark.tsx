import React from 'react'

interface ICheckmarkProps {
  fillColor: string
  className?: string
}

const Checkmark = ({ fillColor, className }: ICheckmarkProps) => {
  return (
    <svg
      className={className}
      fill={fillColor}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z" />
    </svg>
  )
}

export default Checkmark
