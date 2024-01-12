import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    side: ReactNode
    open?: boolean
    end?: boolean
    toggleClassName?: string
    contentClassName?: string
    sideClassName?: string
    overlayClassName?: string
    onClickOverlay?: () => void
  }

const Drawer = ({
  children,
  side,
  open,
  end,
  dataTheme,
  className,
  toggleClassName,
  contentClassName,
  sideClassName,
  overlayClassName,
  onClickOverlay,
  ...props
}: DrawerProps) => {
  const classes = twMerge(
    'drawer',
    className,
    clsx({
      'drawer-end': end,
    })
  )

  return (
    <div
      aria-expanded={open}
      {...props}
      className={classes}
      data-theme={dataTheme}
    >
      <input
        checked={open}
        className={clsx('drawer-toggle', toggleClassName)}
        readOnly
        type="checkbox"
      />
      <div className={clsx('drawer-content', contentClassName)}>{children}</div>
      <div className={clsx('drawer-side', sideClassName)}>
        <label
          className={clsx('drawer-overlay', overlayClassName)}
          onClick={onClickOverlay}
         />
        {side}
      </div>
    </div>
  )
}

export default Drawer
