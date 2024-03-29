import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ dataTheme, className, children, ...props }, ref) => {
    const classes = twMerge('stack', className)

    return (
      <div
        aria-label="Stack"
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


export default Stack
