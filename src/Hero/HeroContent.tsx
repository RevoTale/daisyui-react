import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type HeroContentProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const HeroContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ dataTheme, className, children, ...props }, ref) => {
    const classes = twMerge('hero-content', className)

    return (
      <div {...props} className={classes} data-theme={dataTheme} ref={ref}>
        {children}
      </div>
    )
  }
)

export default HeroContent
