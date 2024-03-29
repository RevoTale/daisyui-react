import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor } from '../types'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  IComponentBaseProps & {
    color?: 'neutral' | ComponentColor
    hover?: boolean
  }

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, href, color, hover = true, dataTheme, className, ...props },
    ref
  ) => {
    const classes = twMerge(
      'link',
      className,
      clsx({
        'link-neutral': color === 'neutral',
        'link-primary': color === 'primary',
        'link-secondary': color === 'secondary',
        'link-accent': color === 'accent',
        'link-info': color === 'info',
        'link-success': color === 'success',
        'link-warning': color === 'warning',
        'link-error': color === 'error',
        'link-hover': hover,
      })
    )

    return (
      <a
        rel="noopener noreferrer"
        {...props}
        className={classes}
        data-theme={dataTheme}
        href={href}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)


export default Link
