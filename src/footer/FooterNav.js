import React from 'react'
import FooterNavCard from './FooterNavCard';

const FooterNav = ({ footers }) => {

    const cards = footers && footers.map((item, i) => (
        <FooterNavCard
            key={`footernavcard-${i}`}
            item={ item }
        />
    ))

    return (
        <div className="footerNav">
            { cards }
        </div>
    )
}

export default FooterNav;