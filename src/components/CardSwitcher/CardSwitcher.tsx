import React, { useState } from 'react'

import { SwitchButton, SwitchContent } from './components'
import content from './contentInfo'

export const CardSwitcher = () => {
  const [active, setActive] = useState(0)

  const renderSwitchButtons = () => {
    return content.map((item) => (
      <SwitchButton
        isActive={active === item.id}
        key={item.id}
        setActive={setActive}
        {...item}
      />
    ))
  }

  return (
    <section className="w-full h-full">
      <div className="px-5 max-w-6xl mx-auto">
        <div className="flex justify-between mb-2 gap-2 overflow-x-auto">
          {renderSwitchButtons()}
        </div>
        <div className="w-full">
          <SwitchContent {...content[active]} />
        </div>
      </div>
    </section>
  )
}
