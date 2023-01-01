import cx from 'classnames'
import React, { ReactNode } from 'react'

interface ISwitchButtonProps {
  id: number
  setActive: (id: number) => void
  isActive: boolean
  buttonText: string
  children: ReactNode
}

export const SwitchButton = ({
  id,
  setActive,
  isActive,
  buttonText,
  children,
}: ISwitchButtonProps) => {
  return (
    <button
      className={cx(
        'border w-1/3 p-4 border-neutral200 dark:border-neutral900 rounded-md',
        { 'bg-amber600 dark:bg-amber600': isActive },
        { 'bg-neutral100 dark:bg-neutral-600': !isActive }
      )}
      onClick={() => setActive(id)}
    >
      <div className="flex flex-col justify-center items-center gap-2 h-full">
        <div className="w-[100px] h-[100px] mission-sm:w-[50px] mission-sm:h-[50px] flex items-center justify-center">
          { children }
        </div>
        <span className="text-base text-neutral800 dark:text-neutral50 mission-sm:text-sm text-center inline-block overflow-hidden text-ellipsis w-[calc(100%)]">{buttonText}</span>
      </div>
    </button>
  )
}
