import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { NavbarProps } from './Navbar'

export type NavbarSectionProps = NavbarProps & {
  section: 'start' | 'center' | 'end'
}

const NavbarSection = React.forwardRef<HTMLDivElement, NavbarSectionProps>(
  ({ children, section, dataTheme, className, style }, ref): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        'navbar-start': section === 'start',
        'navbar-center': section === 'center',
        'navbar-end': section === 'end',
      })
    )

    return (
      <div className={classes} data-theme={dataTheme} ref={ref} style={style}>
        {children}
      </div>
    )
  }
)

export default NavbarSection
