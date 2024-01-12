import React, { forwardRef, useCallback, useRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import ModalActions from './ModalActions'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import ModalLegacy from './ModalLegacy'

export type ModalProps = React.HTMLAttributes<HTMLDialogElement> &
  IComponentBaseProps & {
    open?: boolean
    responsive?: boolean
    backdrop?: boolean
  }

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    { children, open, responsive, backdrop, dataTheme, className, ...props },
    ref
  ) => {
    const containerClasses = twMerge(
      'modal',
      clsx({
        'modal-open': open,
        'modal-bottom sm:modal-middle': responsive,
      })
    )

    const bodyClasses = twMerge('modal-box', className)

    return (
      <dialog
        {...props}
        aria-hidden={!open}
        aria-label="Modal"
        aria-modal={open}
        className={containerClasses}
        data-theme={dataTheme}
        open={open}
        ref={ref}
      >
        <div className={bodyClasses} data-theme={dataTheme}>
          {children}
        </div>
        {backdrop && (
          <form className="modal-backdrop" method="dialog">
            <button type="button">close</button>
          </form>
        )}
      </dialog>
    )
  }
)


export type DialogProps = Omit<ModalProps, 'ref'>
const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleShow = useCallback(() => {
    dialogRef.current?.showModal()
  }, [dialogRef])

  const handleHide = useCallback(() => {
    dialogRef.current?.close()
  }, [dialogRef])

  const Dialog = ({ children, ...props }: DialogProps) => {
    return (
      <Modal {...props} ref={dialogRef}>
        {children}
      </Modal>
    )
  }
  return { dialogRef, Dialog, handleShow, handleHide }
}
export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
  Legacy: ModalLegacy,
  useDialog,
})
