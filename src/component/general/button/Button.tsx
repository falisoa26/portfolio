import { link } from 'fs'
import { type } from 'os'
import React from 'react'
import { Link } from 'react-router-dom'




interface IButton {
    name: string,
    link: string

}


const boutton: IButton[] = [{ name: "Hire me", link: "/about" }, { name: "Contact me", link: "/contact" }]

const Button = () => {
    return (
        <>
            {
                boutton.map((value) => <Link to={value.link} key={value.name} className={value.name} id='btn'>
                    {value.name}
                </Link>)
            }
        </>
    )
}

export default Button;