import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type DiffProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    secondItem: ReactNode
  }

const Diff = forwardRef<HTMLDivElement, DiffProps>(
  (
    { dataTheme, className, children, secondItem, ...props },
    ref
  ) => {
    const classes = twMerge('diff aspect-[16/9]', clsx({}), className)

    return (
      <div {...props} className={classes} data-theme={dataTheme} ref={ref}>
        <div className="diff-item-1">{children}</div>
        <div className="diff-item-2">{secondItem}</div>
        <div className="diff-resizer" />
      </div>
    )
  }
)

export default Diff
