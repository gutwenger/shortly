import React from 'react'
import FeaturesCard from './FeaturesCard'
import brandSVG from "../assets/img/icon-brand-recognition.svg";
import detailedSVG from "../assets/img/icon-detailed-records.svg";
import fullySVG from "../assets/img/icon-fully-customizable.svg";

const Features = () => {
    return (
        <div id="features" className="features">
            <div className="featuresCon">
                <div className="features__up">
                    <h3 className="features__up__title">
                        Advanced Statistics
                    </h3>
                    <p className="features__up__p">
                        Track how your links are performing across the web with our advanced statistic dashboard.
                    </p>
                </div>
                <div className="features__down">
                    <FeaturesCard
                        key="featurescard-brand"
                        icon={ brandSVG }
                        title="Brand Recognition"
                        description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                    />
                    <FeaturesCard
                        key="featurescard-detailed"
                        icon={ detailedSVG }
                        title="Detailed Records"
                        description="Get insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                    />
                    <FeaturesCard
                        key="featurescard-fully"
                        icon={ fullySVG }
                        title="Fully Customisable"
                        description="Improve brand awareness and content discoverability through customisable links, supercharging audience engagement."
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Features;