import { link } from 'fs'
import React from 'react'

type TInput = {
    name: string,
    className?: string
}

const Input = ({ name , className }: TInput) => {
    return (
        <input name='search' className={`search ${className}`} ></input>
    )
}
export default Input;