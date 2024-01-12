import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type ModalProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    open?: boolean
    responsive?: boolean
    onClickBackdrop?: () => void
  }

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      open,
      responsive,
      onClickBackdrop,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const containerClasses = twMerge(
      'modal',
      clsx({
        'modal-open': open,
        'modal-bottom sm:modal-middle': responsive,
      })
    )

    const bodyClasses = twMerge('modal-box', className)

    return (
      <div
        aria-hidden={!open}
        aria-label="Modal"
        aria-modal={open}
        className={containerClasses}
        data-theme={dataTheme}
        onClick={(e) => {
          e.stopPropagation()
          if (e.target === e.currentTarget) {
            e.stopPropagation()
            if (onClickBackdrop) {
              onClickBackdrop()
            }
          }
        }}
      >
        <div
          {...props}
          className={bodyClasses}
          data-theme={dataTheme}
          ref={ref}
        >
          {children}
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'
export default Modal
