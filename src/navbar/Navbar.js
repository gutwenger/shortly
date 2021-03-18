import React, { useEffect, useRef, useState } from 'react'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(window.innerWidth > 700);
    let navbarMenuRef = useRef();

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 700 ) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        })
    }, [showMenu])

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1 className="navbar__logo__h1">
                    Shortly
                </h1>
            </div>
            { showMenu && <NavbarMenu navbarMenuRef={ navbarMenuRef } /> }
            <button className="navbar__toggle" onClick={()=>setShowMenu(prevState => !prevState)}>
                <i className="navbar__toggle__i fas fa-bars"></i>
            </button>
        </nav>
    )
}

export default Navbar;