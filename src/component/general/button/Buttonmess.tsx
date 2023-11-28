import React from 'react'

type Props = {
    className: string,
    text: string,
    onClick?: React.MouseEventHandler

}

const Buttonmess = ({ className, text, onClick }: Props) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Buttonmess