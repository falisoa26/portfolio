import { link } from 'fs'
import { type } from 'os'
import React from 'react'
import { Link } from 'react-router-dom'




interface IButton {
    name: string,
    link: string

}


const boutton: IButton[] = [{ name: "Down cv", link: "/download" }]

const Buttoncv = () => {
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

export default Buttoncv;