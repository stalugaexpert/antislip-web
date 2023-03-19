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
        'w-1/3 rounded-md border border-neutral200 p-4 dark:border-neutral900',
        { 'bg-amber600 dark:bg-amber600': isActive },
        { 'bg-neutral100 dark:bg-neutral-600': !isActive }
      )}
      onClick={() => setActive(id)}
    >
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <div className="flex h-[100px] w-[100px] items-center justify-center mission-sm:h-[50px] mission-sm:w-[50px]">
          {children}
        </div>
        <span className="inline-block w-[calc(100%)] overflow-hidden text-ellipsis text-center text-base text-neutral800 dark:text-neutral50 mission-sm:text-sm">
          {buttonText}
        </span>
      </div>
    </button>
  )
}
