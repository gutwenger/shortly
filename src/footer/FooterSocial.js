import React from 'react'

const FooterSocial = ({ socials }) => {

    const socialsLinks = socials && socials.map((item, i) => (
        <a key={`socials-${i}`} className="footerSocial__li" href={ item.path }>
            <i className={`footerSocial__li ${ item.icon }`} />
        </a>
    ))

    return (
        <div className="footerSocial">
            <ul className="footerSocial__ul">
                { socialsLinks }
            </ul>
        </div>
    )
}

export default FooterSocial;