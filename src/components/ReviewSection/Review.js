import React from 'react'

const Review = ({jobDescription, company, reviewBody, country}) => { 

    const countryPath = '../../flags/' + country + '.png';
    return (
        <div>
            <h1> { jobDescription } </h1>
            <p> {company} </p>
            <img src={countryPath} alt="" />
            <p> {reviewBody} </p>
            <p>read more</p>
            <i></i>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />

        </div>
    );
};

export default Review;
