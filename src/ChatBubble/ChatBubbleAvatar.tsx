import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'
import Avatar, { AvatarProps } from '../Avatar'

export type ChatBubbleAvatarProps = AvatarProps & IComponentBaseProps

const ChatBubbleAvatar = React.forwardRef<
  HTMLDivElement,
  ChatBubbleAvatarProps
>(({ size = 'xs', shape = 'circle', className, ...props }, ref) => (
  <Avatar
    shape={shape}
    size={size}
    {...props}
    className={twMerge('chat-image', className)}
    ref={ref}
  />
))

export default ChatBubbleAvatar
