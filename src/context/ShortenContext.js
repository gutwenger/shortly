import React, { useContext, useState } from "react";

const ShortenContext = React.createContext();

export function useShorten() {
    return useContext(ShortenContext);
}

export const ShortenProvider = ({ children }) => {

    const [results, setResults] = useState(()=>checkPreviousResult());
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    function checkPreviousResult() {
        if (localStorage.getItem("results")) {
            return JSON.parse(localStorage.getItem("results"));
        }
        return null;
    }

    function getShortenLink(url) {
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(response => response.json())
            .then(result => {
                if (result.ok) {
                    let newResults = results;
                    if (results) {
                        newResults = [...results, result.result];
                    } else {
                        newResults = [result.result];
                    }
                    localStorage.setItem("results", JSON.stringify(newResults));
                    setResults(newResults);
                    setError(false);
                } else {
                    setError(result.error);
                }
                setLoading(false);
            })
    }

    function removeResult(code) {
        let newResults = results.filter(item => item.code !== code);
        if (newResults.length === 0) {
            setResults(null);
            localStorage.removeItem("results");
        } else {
            setResults(newResults);
            localStorage.setItem("results", JSON.stringify(newResults));
        }
        
    }

    return(
        <ShortenContext.Provider value={{ results, getShortenLink, removeResult, error, setError, loading, setLoading }}>
            { children }
        </ShortenContext.Provider>
    )
}