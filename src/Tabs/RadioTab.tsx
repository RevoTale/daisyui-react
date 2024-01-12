import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type RadioTabProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  active?: boolean
  disabled?: boolean
  label: string
  name: string
  contentClassName?: string
}

const RadioTab = forwardRef<HTMLInputElement, RadioTabProps>(
  (
    {
      children,
      className,
      active,
      label,
      disabled,
      name,
      contentClassName,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'tab',
      className,
      clsx({
        'tab-active': active,
        'tab-disabled': disabled,
      })
    )
    const contentClasses = twMerge('tab-content', contentClassName)

    return (
      <>
        <input
          aria-label={label}
          className={classes}
          disabled={disabled}
          name={name}
          role="tab"
          type="radio"
          {...props}
          ref={ref}
        />
        <div className={contentClasses}>{children}</div>
      </>
    )
  }
)

export default RadioTab
