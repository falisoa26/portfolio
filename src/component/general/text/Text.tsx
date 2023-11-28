import React, { Children, ElementType } from 'react'

type Props = {
    tag: ElementType,
    size?: string,
    weight?: number,
    className?: string,
    children: string,
    color?: string
}



const Text = ({ tag, size, weight, className, children, color }: Props) => {

    const Tag = tag;
    return (
        <Tag
            className={className}
            style={{
                fontSize: size,
                fontWeight: weight,
                color: color,
            }}
        >
            {children}
        </Tag>
    )
}
export default Text;