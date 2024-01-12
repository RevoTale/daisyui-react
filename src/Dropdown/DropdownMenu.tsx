import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement> &
  IComponentBaseProps

const DropdownMenu = ({
  dataTheme,
  className,
  ...props
}: DropdownMenuProps) => {
  const classes = twMerge(
    'dropdown-content menu p-2 shadow bg-base-100 rounded-box',
    className
  )

  return (
    <ul
      {...props}
      className={classes}
      data-theme={dataTheme}
      role="menu"
      tabIndex={0}
    />
  )
}

export default DropdownMenu
