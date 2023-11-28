// import React from 'react'
import './Header.scss'
// import Logo from '../../icons/iconLogo/Logo'
import NavItem from './NavItem'
import IconHeader from '../../general/icons/IconHeader'
import Menu from '../../general/icons/Menu'
import { useState } from 'react'

const Header = () => {
    const [view, setView] = useState<boolean>(true);
    const show = ()=>{
        view? setView(false): setView(true);
    }
    return (
        <>
            <div className='header'>
                <div className="logo">
                    <IconHeader />
                </div>
                {
                    view && <div className='navbarItems'>
                    <NavItem />
                </div>
                }
                <div className="iconHeader" onClick={show} >
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Header;
