import React from 'react'
import style from "./review.module.css";
import { IoIosArrowDown } from 'react-icons/io';



const Review = ({
    jobDescription,   
    company, 
    reviewBody, 
    country, 
    reaction1, 
    reaction2, 
    reaction3, 
    reaction4,
    reviewId
        
    }) => { 

     //const reactionPath = '../../emoji/' + reaction + '.png';
     // negative, positive, latest, most interactions.
    return (
        <div className={style.review}>
            <div className={style.reviewHeader}>
                <h1 className={style.jobDescription}> { jobDescription } </h1>
                <p className={style.company}>  {company} </p>
                <img className={style.country} 
                src="https://flagcdn.com/w20/se.png"
                srcset="https://flagcdn.com/w40/se.png 2x" 
                alt="Sweden" /> 
                </div>
                <p> {reviewBody} </p>

            <div className={style.reviewFooter}>
                
                <div className={style.RMcontainer}>
                <p className={style.readMore}>Read More</p>
                <i className={style.arrowdownIcon}> </i>
                </div>
            
                <div className={style.reactions}>
                    <i className={style.reaction1} />
                    <input type="number" value={reaction1} className={style.inputCounter} />
                    <i className={style.reaction2} />
                    <input type="number" value={reaction2} className={style.inputCounter} />
                    <i className={style.reaction3} />
                    <input type="number" value={reaction3} className={style.inputCounter} />
                    <i className={style.reaction4} />
                    <input type="number" value={reaction4} className={style.inputCounter} />
                </div>
            </div>
        </div>
    );
};

export default Review;


//                <img className={style.reaction} src={reactionPath} alt="" />


 



// <p>{reviewId}</p>