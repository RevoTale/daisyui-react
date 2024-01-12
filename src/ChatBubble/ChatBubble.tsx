import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'
import ChatBubbleMessage from './ChatBubbleMessage'
import ChatBubbleHeader from './ChatBubbleHeader'
import ChatBubbleTime from './ChatBubbleTime'
import ChatBubbleFooter from './ChatBubbleFooter'

export type ChatBubbleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    end?: boolean
  }

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  (
    { end = false, dataTheme, className, children, ...props },
    ref
  ) => (
    <div
      {...props}
      className={twMerge('chat', `chat-${end ? 'end' : 'start'}`, className)}
      data-theme={dataTheme}
      ref={ref}
    >
      {children}
    </div>
  )
)

export default Object.assign(ChatBubble, {
  Header: ChatBubbleHeader,
  Time: ChatBubbleTime,
  Message: ChatBubbleMessage,
  Footer: ChatBubbleFooter,
})
