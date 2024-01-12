import React, {forwardRef} from 'react'
import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

import {IComponentBaseProps} from '../types'

import CollapseTitle from '../Collapse/CollapseTitle'
import CollapseContent from '../Collapse/CollapseContent'

export type AccordionProps = Omit<
    React.HTMLAttributes<HTMLInputElement>,
    'type'
> &
    IComponentBaseProps & {
    name?: string
    icon?: 'arrow' | 'plus'
}

const Accordion = forwardRef<HTMLInputElement, AccordionProps>(
    (
        {name = 'accordion', icon, dataTheme, className, children, ...props},
        ref
    ) => {
        const classes = twMerge(
            'collapse',
            clsx({
                'collapse-arrow': icon === 'arrow',
                'collapse-plus': icon === 'plus',
            }),
            className
        )

        return (
            <div className={classes} data-theme={dataTheme}>
                <input {...props} name={name} ref={ref} type="radio"/>
                {children}
            </div>
        )
    }
)
export default Object.assign(Accordion, {
    Title: CollapseTitle,
    Content: CollapseContent,
})
