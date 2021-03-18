import React from 'react'

const FooterNavCard = ({ item }) => {
    return (
        <div className="footerNavCard">
            <p className="footerNavCard__title">
                { item.name }
            </p>
            <ul className="footerNavCard__ul">
                { item.links.map((item, i) => (
                    <a key={`footernav-${item.name.toLowerCase()}-${i}`} href={item.path} className="footerNavCard__li">
                        { item.name }
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default FooterNavCard;