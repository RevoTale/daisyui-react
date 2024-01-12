import React, { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import BreadcrumbsItem, { BreadcrumbsItemProps } from './BreadcrumbsItem'

export type BreadcrumbsProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children?:
      | ReactElement<BreadcrumbsItemProps>
      | ReactElement<BreadcrumbsItemProps>[]
    innerRef?: React.Ref<HTMLUListElement>
    innerProps?: React.HTMLAttributes<HTMLUListElement>
  }

const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { children, dataTheme, className, innerProps, innerRef, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge('breadcrumbs', 'text-sm', className)

    return (
      <div
        aria-label="Breadcrumbs"
        role="navigation"
        {...props}
        className={classes}
        data-theme={dataTheme}
        ref={ref}
      >
        <ul {...innerProps} ref={innerRef}>
          {children}
        </ul>
      </div>
    )
  }
)

export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem })
