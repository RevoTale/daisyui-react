import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor, IComponentBaseProps } from '../types'

export type RadialProgressProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    value: number
    size?: string
    thickness?: string
    color?: ComponentColor
  }

const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(
  (
    {
      value,
      size = '4rem',
      thickness = '4px',
      color,
      dataTheme,
      className,
      children,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'radial-progress',
      className,
      clsx({
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-accent': color === 'accent',
        'text-info': color === 'info',
        'text-success': color === 'success',
        'text-warning': color === 'warning',
        'text-error': color === 'error',
      })
    )

    const displayedValue = Math.min(100, Math.max(0, value))
    const progressStyle: Record<string, string | number> = {
      '--value': displayedValue,
      '--size': size,
      '--thickness': thickness,
    }

    return (
      <div
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={displayedValue}
        role="progressbar"
        {...props}
        className={classes}
        data-theme={dataTheme}
        ref={ref}
        style={progressStyle}
      >
        {children}
      </div>
    )
  }
)

RadialProgress.displayName = 'RadialProgress'

export default RadialProgress
