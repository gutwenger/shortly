import React from 'react';

import { useShorten } from "../context/ShortenContext";

const SearchForm = () => {

    const { error, setError, loading, setLoading, getShortenLink } = useShorten();

    function handleSubmit(event) {
        event.preventDefault();

        // Empty input is not accepted
        if (event.target.url.value.trim() === "") {
            setError("Please add a link.")
            return;
        }

        // Invalid url format is not accepted
        let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/
        if (!event.target.url.value.match(regex)) {
            setError("Invalid URL format.")
            return;
        }

        getShortenLink(event.target.url.value);
        setLoading(true);

        // Reset input field
        event.target.url.value = '';
    }

    let errorMessage = error && (
        <p className="searchForm__form__error">
            { error }
        </p>
    )

    let inputErrorClass = error && "searchForm__form__input--error";

    let loadingCard = (
        <div className="searchForm__loading">
            <i className="searchForm__loading__i fas fa-spinner"></i>
            <p className="searchForm__loading__p">
                We are shortening your URL... Please wait...
            </p>
        </div>
    )

    let searchFormCon = (
        <>
            <div className="searchForm__form__grp">
                <input className={`searchForm__form__input ${ inputErrorClass }`} type="text" placeholder="Shorten a link here..." name="url" />
                { errorMessage }
            </div>
            <button className="searchForm__form__btn" type="submit">
                Shorten it!
            </button>
        </>
    )

    return (
        <div className="searchForm">
            <div className="searchFormCon">
                <form className="searchForm__form" onSubmit={(event)=>handleSubmit(event)}>
                    { loading ? loadingCard : searchFormCon }
                </form>
            </div>
        </div>
    )
}

export default SearchForm;