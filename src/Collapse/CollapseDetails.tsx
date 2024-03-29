import React from 'react'

import { classesFn, CollapseProps } from './Collapse'
import { Summary } from './CollapseTitle'

export type DetailsProps = Omit<
  CollapseProps<HTMLDetailsElement>,
  'checkbox' | 'onOpen' | 'onClose' | 'onToggle'
>
const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>(
  (
    { children, icon, open, dataTheme, className, ...props },
    ref
  ) => {
    return (
      <details
        {...props}
        className={classesFn({ className, icon, open })}
        data-theme={dataTheme}
        open={open}
        ref={ref}
      >
        {children}
      </details>
    )
  }
)
export default Object.assign(Details, { Title: Summary })
