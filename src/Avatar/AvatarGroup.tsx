import React, {Children, ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'


export type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge('avatar-group -space-x-6', className)

    return (
      <div
        aria-label={`Group of ${Children.count(children)} avatar photos`}
        {...props}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default AvatarGroup
