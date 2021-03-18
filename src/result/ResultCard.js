import React, { useState } from 'react';
import { useShorten } from "../context/ShortenContext";
import { executeCopy } from "../util/copy";

const ResultCard = ({ code, original, shortened }) => {

    const { removeResult } = useShorten();
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        executeCopy(shortened);
        setCopied(true);
    }

    function handleDelete() {
        removeResult(code);
    }

    return (
        <div className="resultCard">
            <p className="resultCard__original">
                { original }
            </p>
            <p className="resultCard__shortened">
                { shortened }
            </p>
            <button className={ copied ? "resultCard__btn resultCard__btn--copied" : "resultCard__btn" } onClick={()=>handleCopy()}>
                { copied ? "Copied!" : "Copy" }
            </button>
            <button className="resultCard__delete" onClick={()=>handleDelete(code)}>
                <i className="resultCard__delete__i fas fa-times"></i>
            </button>
        </div>
    )
}

export default ResultCard;