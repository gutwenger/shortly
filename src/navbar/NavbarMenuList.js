import React from 'react'

const NavbarMenuList = () => {
    return (
        <div className="navbarMenuList">
            <ul className="navbarMenuList__ul">
                <a href="/" className="navbarMenuList__li">
                    Features
                </a>
                <a href="/" className="navbarMenuList__li">
                    Pricing
                </a> 
                <a href="/" className="navbarMenuList__li">
                    Resources
                </a>     
            </ul>    
        </div>
    )
}

export default NavbarMenuList;