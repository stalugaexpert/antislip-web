import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import { SwitchButton, SwitchContent } from './components'
import { PendulumIcon, RoughnessIcon, SlipalertIcon } from './components/ButtonIcons'

export const CardSwitcher = () => {
  const { t } = useTranslation('card-switcher')
  const [active, setActive] = useState(0)

  const content = [
    {
      id: 0,
      buttonText: 'Pendulum Test',
      contentTitle: 'pendulumTitle',
      contentText: 'pendulumContent',
      contentImage: '/images/pendulum-test.jpg',
      testInfo: ['testInfo1', 'testInfo2'],
      icon: <PendulumIcon />
    },
    {
      id: 1,
      buttonText: 'Slip Alert',
      contentTitle: 'slipTitle',
      contentText: 'slipContent',
      contentImage: '/images/slip-alert-test.jpg',
      testInfo: ['testInfo1'],
      icon: <SlipalertIcon />
    },
    {
      id: 2,
      buttonText: t('roughnessTest'),
      contentTitle: 'roughnessTitle',
      contentText: 'roughnessContent',
      contentImage: '/images/roughness-test.jpg',
      testInfo: ['testInfo1', 'testInfo2'],
      icon: <RoughnessIcon />
    },
  ]

  return (
    <section className="w-full h-full">
      <div>
        <div className="flex justify-between mb-2 gap-2">
          {content.map((item) => (
            <SwitchButton
              isActive={active === item.id}
              key={item.id}
              setActive={setActive}
              {...item}
            >
              {item.icon}
            </SwitchButton>
          ))}
        </div>
        <div className="w-full">
          <SwitchContent {...content[active]} />
        </div>
      </div>
    </section>
  )
}
