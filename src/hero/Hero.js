import React from 'react'
import HeroImg from './HeroImg'
import HeroText from './HeroText';

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <HeroImg />
            <HeroText 
                key="herotext"
                header="More than just shorter links"
                paragraph="Build your brand's recognition and get detailed insights on how your links are performing."
            />
        </div>
    )
}

export default Hero;