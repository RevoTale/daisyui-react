import React from 'react'

import { classesFn, DropdownProps } from './Dropdown'
import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'
import { Summary } from './DropdownToggle'

export type DetailsProps = Omit<
  DropdownProps<HTMLDetailsElement>,
  'item' | 'hover'
>
const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>(
  (
    {
      children,
      className,
      horizontal,
      vertical,
      end,
      dataTheme,
      open,
      ...props
    },
    ref
  ) => {
    return (
      <details
        role="listbox"
        {...props}
        className={classesFn({
          className,
          horizontal,
          vertical,
          open,
          end,
        })}
        data-theme={dataTheme}
        open={open}
        ref={ref}
      >
        {children}
      </details>
    )
  }
)

export default Object.assign(Details, {
  Toggle: Summary,
})
