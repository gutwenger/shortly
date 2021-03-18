import React from 'react'

const NavbarMenuAuth = () => {
    return (
        <div className="navbarMenuAuth">
            <ul className="navbarMenuAuth__ul">
                <a href="/" className="navbarMenuAuth__li">
                    Login
                </a>
                <a href="/" className="navbarMenuAuth__li navbarMenuAuth__li--round">
                    Sign Up
                </a>
            </ul>
        </div>
    )
}

export default NavbarMenuAuth;