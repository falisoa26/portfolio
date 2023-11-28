import React from 'react'
import Text from '../../general/text/Text'

type Props = {
    picture: string,
    className: string,
    children: string,
    statue: string
}

function Card({
    picture, className, children, statue

}: Props) {
    return (
        <div className={className}>
            <img src={picture} />
            <Text tag='p' className="descri" children={children} />
            <Text tag='p' className={` ${statue}`} children={statue} />

        </div>
    )
}

export default Card