import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import { bgColors, brandColors, componentStatuses } from '../constants'

export const windowMockupColors = [
  ...bgColors,
  ...brandColors,
  ...componentStatuses,
] as const

type WindowMockupColors = typeof windowMockupColors[number]

export type WindowMockupProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    frameColor?: WindowMockupColors
    backgroundColor?: WindowMockupColors
    border?: boolean
    borderColor?: WindowMockupColors
  }

const WindowMockup = forwardRef<HTMLDivElement, WindowMockupProps>(
  (
    {
      border,
      borderColor,
      backgroundColor,
      frameColor,
      dataTheme,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Set border color to framecolor or 'bg-base-300', if border color is not defined
    const borderColorValue = borderColor
      ? borderColor
      : frameColor || 'base-300'

    const classes = twMerge(
      'mockup-window',
      border && `border border-${borderColorValue}`,
      clsx({
        'border-primary': borderColorValue === 'primary',
        'border-secondary': borderColorValue === 'secondary',
        'border-accent': borderColorValue === 'accent',
        'border-info': borderColorValue === 'info',
        'border-success': borderColorValue === 'success',
        'border-warning': borderColorValue === 'warning',
        'border-error': borderColorValue === 'error',
        'border-base-100': borderColorValue === 'base-100',
        'border-base-200': borderColorValue === 'base-200',
        'border-base-300': borderColorValue === 'base-300',
        'border-neutral': borderColorValue === 'neutral',
        'bg-primary': frameColor === 'primary',
        'bg-secondary': frameColor === 'secondary',
        'bg-accent': frameColor === 'accent',
        'bg-info': frameColor === 'info',
        'bg-success': frameColor === 'success',
        'bg-warning': frameColor === 'warning',
        'bg-error': frameColor === 'error',
        'bg-base-100': frameColor === 'base-100',
        'bg-base-200': frameColor === 'base-200',
        'bg-base-300': frameColor === 'base-300',
        'bg-neutral': frameColor === 'neutral',
      }),
      className
    )
    // List of classes that child element will have
    const innerClasses = clsx(
      backgroundColor && `bg-${backgroundColor}`,
      border && `border-t border-${borderColorValue}`,
      'p-4'
    )

    return (
        <div
            aria-label="Window mockup"
            {...props}
            className={classes}
            data-theme={dataTheme}
            ref={ref}
        >
            <div className={innerClasses}>{children}</div>
        </div>
    )
  }
)

export default WindowMockup
