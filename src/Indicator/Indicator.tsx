import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import IndicatorItem, { IndicatorItemProps as ItemProps } from './IndicatorItem'

export type IndicatorItemProps = ItemProps
export type IndicatorProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const classesFn = ({ className }: Pick<IndicatorProps, 'className'> = {}) =>
  twMerge('indicator', className)
const Indicator = React.forwardRef<HTMLDivElement, IndicatorProps>(
  ({ children, className, dataTheme, ...props }, ref) => {
    return (
      <div
        {...props}
        className={classesFn({ className })}
        data-theme={dataTheme}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Object.assign(Indicator, {
  Item: IndicatorItem,
  className: classesFn,
})
