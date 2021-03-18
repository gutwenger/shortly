import React from 'react'

const HeroText = ({ header, paragraph }) => {
    return (
        <div className="heroText">
            <h2 className="heroText__header">
                { header }
            </h2>
            <p className="heroText__paragraph">
                { paragraph }
            </p>
            <a href="/" className="heroText__a">
                Get Started
            </a>
        </div>
    )
}

export default HeroText;