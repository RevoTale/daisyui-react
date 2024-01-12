import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
} from '../types'

export type SkeletonProps = 
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      dataTheme,
      className,
      children,
      ...props
      },
      ref
  ) => {
    const classes = twMerge(
      'skeleton',
      clsx({
        }),
        className,
    )

    return (
      <div
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


export default Skeleton
