import React from 'react'
import ResultCard from './ResultCard';

import { useShorten } from "../context/ShortenContext";

const Result = () => {

    const { results } = useShorten();
    
    let resultCards = results && results.map((item, i) => (
        <ResultCard
            key={`resultcard-${i}`}
            code={ item.code }
            original={ item.original_link }
            shortened={ item.full_short_link2 }
        />
    ))
    
    return (
        <div className="result">
            <div className="resultCon">
                { resultCards }
            </div>
        </div>
    )
}

export default Result;