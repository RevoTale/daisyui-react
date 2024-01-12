import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import NavbarSection, { NavbarSectionProps } from './NavbarSection'

export type NavbarProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ children, dataTheme, className, ...props }, ref) => {
    const classes = twMerge('navbar', className)

    return (
      <div
        aria-label="Navbar"
        role="navigation"
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

const NavbarStart = React.forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, 'section'>
>((props, ref) => <NavbarSection {...props} ref={ref} section="start" />)

const NavbarCenter = React.forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, 'section'>
>((props, ref) => <NavbarSection {...props} ref={ref} section="center" />)

const NavbarEnd = React.forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, 'section'>
>((props, ref) => <NavbarSection {...props} ref={ref} section="end" />)

export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
})
