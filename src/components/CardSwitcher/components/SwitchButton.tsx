import cx from 'classnames'
import Image from 'next/image'
import React from 'react'

interface ISwitchButtonProps {
  id: number
  setActive: (id: number) => void
  isActive: boolean
  buttonText: string
}

export const SwitchButton = ({
  id,
  setActive,
  isActive,
  buttonText,
}: ISwitchButtonProps) => {
  return (
    <button
      className={cx(
        'border border-black px-24 py-8 flex flex-col items-center dark:bg-neutral-600 dark:border-transparent rounded-md flex-1',
        { 'bg-amber600 dark:bg-amber600 border-transparent': isActive }
      )}
      onClick={() => setActive(id)}
    >
      <Image
        alt="icon"
        height={50}
        src="/icons/clean.png"
        width={50}
      />
      <span className="text-xl text-center">{buttonText}</span>
    </button>
  )
}
