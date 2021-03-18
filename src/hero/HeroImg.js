import React from 'react';
import workingSVG from "../assets/img/illustration-working.svg";

const HeroImg = () => {
    return (
        <div className="heroImg">
            <img src={ workingSVG } className="heroImg__img" alt="working" />
        </div>
    )
}

export default HeroImg;