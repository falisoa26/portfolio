import React from 'react'
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom'





type Itemsnav = {
    label: string, link: string, id: string
}
const items: Itemsnav[] = [
    {
        label: "Home",
        link: '/',
        id: 'home'
    },
    {
        label: "About",
        link: '/about',
        id: 'about'
    },
    {
        label: "Services",
        link: '/services',
        id: 'services'
    },
    {
        label: "Skill",
        link: '/skill',
        id: 'skill'
    },
    {
        label: "Portfolio",
        link: '/portfolio',
        id: 'portfolio'
    },
    {
        label: "Testimonial",
        link: '/testimonial',
        id: 'testimonial'
    },
    {
        label: "Contact",
        link: '/contact',
        id: 'contact'
    },
]

const NavItem = () => {
    return (
        <>
            {
                items.map((value) => (
                    <Link to={value.id} key={value.label} smooth={true} duration={500} >
                        {value.label}
                    </Link>
                ))
            }
        </>
    )
}

export default NavItem