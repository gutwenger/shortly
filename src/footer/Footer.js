import React from 'react'
import FooterNav from './FooterNav'
import FooterSocial from './FooterSocial'

const Footer = () => {

    const FOOTERS = [
        {
            cat: 0,
            name: "Features",
            links: [
                {
                    path: "/",
                    name: "Link Shortening"
                },
                {
                    path: "/",
                    name: "Branded Links"
                },
                {
                    path: "/",
                    name: "Analytics"
                },
            ]
        },
        {
            cat: 1,
            name: "Resources",
            links: [
                {
                    path: "/",
                    name: "Blog"
                },
                {
                    path: "/",
                    name: "Developers"
                },
                {
                    path: "/",
                    name: "Support"
                },
            ]
        },
        {
            cat: 2,
            name: "Company",
            links: [
                {
                    path: "/",
                    name: "About"
                },
                {
                    path: "/",
                    name: "Our Team"
                },
                {
                    path: "/",
                    name: "Careers"
                },
                {
                    path: "/",
                    name: "Contact"
                }
            ]
        }
    ]

    const SOCIALS = [
        {
            path: "/",
            icon: "fab fa-facebook-square"
        },
        {
            path: "/",
            icon: "fab fa-twitter"
        },
        {
            path: "/",
            icon: "fab fa-pinterest"
        },
        {
            path: "/",
            icon: "fab fa-instagram"
        }
    ]

    return (
        <div className="footer">
            <div className="footerCon">
                <h1 className="footer__logo">
                    Shortly
                </h1>
                <FooterNav
                    key="footernav"
                    footers={ FOOTERS }
                />
                <FooterSocial
                    key="footersocial"
                    socials={ SOCIALS }
                />
            </div>
        </div>
    )
}

export default Footer;