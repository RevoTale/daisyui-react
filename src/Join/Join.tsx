import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type JoinProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    responsive?: boolean
    vertical?: boolean
    horizontal?: boolean
  }

const Join = forwardRef<HTMLDivElement, JoinProps>(
  (
    {
      dataTheme,
      className,
      children,
      responsive,
      vertical,
      horizontal,
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      'join',
      clsx({
        'join-vertical': !responsive && vertical,
        'join-horizontal': !responsive && horizontal,
        'join-vertical lg:join-horizontal': responsive,
      }),
      className
    )

    return (
      <div {...props} className={classes} data-theme={dataTheme} ref={ref}>
        {children}
      </div>
    )
  }
)
export default Join
