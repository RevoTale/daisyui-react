import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentPosition,
} from '../types'

export type TooltipProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
  IComponentBaseProps & {
    message: string
    open?: boolean
    color?: ComponentColor
    position?: ComponentPosition
  }

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      message,
      children,
      open,
      color,
      position,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      'tooltip',
      className,
      clsx({
        'tooltip-open': open,
        'tooltip-primary': color === 'primary',
        'tooltip-secondary': color === 'secondary',
        'tooltip-accent': color === 'accent',
        'tooltip-info': color === 'info',
        'tooltip-success': color === 'success',
        'tooltip-warning': color === 'warning',
        'tooltip-error': color === 'error',
        'tooltip-top': position === 'top',
        'tooltip-bottom': position === 'bottom',
        'tooltip-left': position === 'left',
        'tooltip-right': position === 'right',
      })
    )

    return (
      <div
        role="tooltip"
        {...props}
        className={classes}
        data-theme={dataTheme}
        data-tip={message}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Tooltip
