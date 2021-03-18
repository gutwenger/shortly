import React from 'react'

const FeaturesCard = ({ icon, title, description }) => {
    return (
        <div className="featuresCard">
            <div className="featuresCard__description">
                <div className="featuresCard__icon">
                    <img className="featuresCard__icon__img" src={ icon } alt="features" />
                </div>
                <h4 className="featuresCard__description__title">
                    { title }
                </h4>
                <p className="featuresCard__description__p">
                    { description }
                </p>
            </div>
        </div>
    )
}

export default FeaturesCard;