import React, {useState, useEffect} from 'react';
import Review from './Review';
import {
    Container,
    SearchContainer, 
    SearchWrapper, 
    SearchBox, 
    SearchButton, 
    SearchTerm, 
    SearchIcon,
    ReviewContainer,
    /*ReviewHeader,
    ReviewCard,
    JobTitle,
    Company,
    Country,
    ReviewBody,
    ReviewFooter,
    ReviewReadmore,
    ThumbsUpButton,
    ThumbsDownButton,
    ThumbsDownIcon,
    ReactionCounter,
    ReadmoreIcon,
ThumbsUpIcon*/} from './ReviewSection.elements'
    
    
    
    




const ReviewSection = () => {
    
    const [reviews, setReviews] = useState([]);
    
        

useEffect(  () => {

     getReviews();
    
}, []);

const getReviews = async () => {
    const response = await fetch(
    `https://0mx7c07qka.execute-api.eu-north-1.amazonaws.com/company?q=Spotify`
    );
    const data = await response.json();
    setReviews(data.Items);
    console.log(data.Items);
}

    return (
<Container>
    <SearchContainer>
            <SearchWrapper>
                <SearchBox>
                    <SearchTerm type="text" placeholder="Search for any company e.g Spotify" />
                        <SearchButton type="submit">
                            <SearchIcon />
                        </SearchButton>
                </SearchBox>
            </SearchWrapper>
        </SearchContainer>
            
        <ReviewContainer>
        {reviews.map(r => 
    <Review
    jobDescription={r.jobDescription}
    company={r.company}
    reviewBody={r.reviewBody}
    country={r.country}
    />
    )};

         </ReviewContainer> 
         
    </Container>
            
        
    )
}

export default ReviewSection;
/* För varhe reaktion
                    <Reaction1 />
                    <Reaction2 />
                    <Reaction3 />
                    <Reaction4 /> */


                    /* 
                    
                    <ReviewCard>
                <ReviewHeader>
                    <JobTitle>
                        <h1>Product Designer</h1>
                    </JobTitle>
                    <Company>
                        <p>Spotify</p>
                    </Company>
                    <Country>
                        
                    </Country>
                </ReviewHeader> 
                <ReviewBody>
                        <p>this is my review, it's a good and honest review. 
                        this is my review, it's a good and honest review. this is my review, it's a good and honest review. 
                        this is my review, it's a good and honest review.
                        Non fermentum adipiscing donec eget eu. Non fermentum adipiscing donec eget eu. Accumsan, sem donec vel quisque egestas suscipit venenatis lacus. Tellus risus quis augue placerat. Leo, eget ut auctor enim, laoreet magna. Nisi elit malesuada.
                        Accumsan, sem donec vel quisque egestas suscipit venenatis lacus. Tellus risus quis augue placerat. Leo, eget ut auctor enim, laoreet magna. Nisi elit malesuada.</p>
                </ReviewBody>
                <ReviewFooter>
                        <ReviewReadmore>
                                <span>Read more</span>   
                        </ReviewReadmore>
                        <ReadmoreIcon />
                        <ThumbsUpButton type="submit">
                        <ThumbsUpIcon />
                        <ReactionCounter type="number" value="0"/>
                        </ThumbsUpButton>    
                        <ThumbsDownButton type="submit">
                        <ThumbsDownIcon />
                        <ReactionCounter type="number" value="0"/>
                        </ThumbsDownButton>
                    
                </ReviewFooter>
            </ReviewCard>
                    
                    */