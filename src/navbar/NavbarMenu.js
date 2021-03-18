import React from 'react'
import NavbarMenuAuth from './NavbarMenuAuth'
import NavbarMenuList from './NavbarMenuList'

const NavbarMenu = ({ navbarMenuRef }) => {
    return (
        <div className="navbarMenu" ref={ navbarMenuRef }>
            <div className="navbarMenuCon">
                <NavbarMenuList />
                <NavbarMenuAuth />
            </div>
        </div>
    )
}

export default NavbarMenu;