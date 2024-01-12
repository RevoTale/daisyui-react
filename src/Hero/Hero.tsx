import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import HeroContent from './HeroContent'
import HeroOverlay from './HeroOverlay'

export type HeroProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ dataTheme, className, children, ...props }, ref) => {
    const classes = twMerge('hero', className)

    return (
      <div
        role="banner"
        {...props}
        className={classes}
        data-theme={dataTheme}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
})
