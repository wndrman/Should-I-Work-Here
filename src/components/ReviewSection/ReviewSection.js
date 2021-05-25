import React, {useState, useEffect} from 'react';
import Review from './Review';
import {
    Container,
     
    SearchForm, 
    
    SearchButton, 
    SearchBar, 
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

    const [search, setSearch] = useState('')

    const [ query, setQuery] = useState('Spotify')
    
        

useEffect(  () => {

     getReviews();
    
}, [query]);

const getReviews = async () => {
    const response = await fetch(
    `https://0mx7c07qka.execute-api.eu-north-1.amazonaws.com/company?q=${query}`
    );
    const data = await response.json();
    setReviews(data.Items);
    console.log(data.Items);
}

const updateSearch = e => {

    setSearch(e.target.value);
    console.log(search)

}

const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}

    return (
<Container>
            <SearchForm onSubmit={getSearch}>
                    <SearchBar 
                    type="text" 
                    placeholder="Search for any company e.g Spotify" 
                    value={search} 
                    onChange={updateSearch} />
                        <SearchButton type="submit">
                            <SearchIcon /* Seearch button */ />
                    </SearchButton>  
            </SearchForm>
        
            
        <ReviewContainer>
        {reviews.map(r => 
    <Review
    jobDescription={r.jobDescription}
    company={r.company}
    country={r.country}
    reviewBody={r.reviewBody}
    reaction1={r.reaction1}
    reaction2={r.reaction2}
    reaction3={r.reaction3}
    reaction4={r.reaction4}
    reviewId={r.reviewId}
    />
    )}

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