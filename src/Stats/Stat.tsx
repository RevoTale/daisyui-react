import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import StatSection, { StatSectionProps } from './StatSection'

export type StatProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('stat', className)

    return (
      <div {...props} className={classes} data-theme={dataTheme} ref={ref} />
    )
  }
)

const StatTitle = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} ref={ref} section="title" />)

const StatValue = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} ref={ref} section="value" />)

const StatDesc = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} ref={ref} section="desc" />)

const StatFigure = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} ref={ref} section="figure" />)

const StatActions = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} ref={ref} section="actions" />)

export default Object.assign(Stat, {
  Title: StatTitle,
  Value: StatValue,
  Desc: StatDesc,
  Figure: StatFigure,
  Actions: StatActions,
})
