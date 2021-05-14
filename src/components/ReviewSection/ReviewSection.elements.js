import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs';
import { CgSweden } from 'react-icons/cg';
import { IoIosArrowDown } from 'react-icons/io';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'

export const Container = styled.div`
padding: 0px 50px;
`;

export const SearchContainer = styled.div`
background-color: #f8f5f2;
max-width: 1200px;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;

export const SearchWrapper = styled.div`
   position: relative;
   display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    
`;

export const SearchTerm = styled.input`
   width: 50%;
    border: 2px solid #045959;
    border-right: none;
    padding: 15px;
    height: 50px;
    border-radius: 8px 0 0 8px;
    outline: none;
    color: #173439;
    font-size: 18px;
    
    `

export const SearchBox = styled.div`
   width: 100%;
    position: relative;
    display: flex;

`

export const SearchButton = styled.button`
 width: 50px;
    height: 50px;
    border: 2px solid #045959;
    background: #045959;  
    text-align: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        background-color: #173439;
        border-color: #173439;

}
    
`

export const SearchIcon = styled(BsSearch)`
color: #f8f5f2;
font-size: 1.8rem;
`;

export const ReviewContainer = styled.div`
display: flex;
justify-content: flex-start;


`;

export const ReviewCard = styled.div` //kommer en ternary för ifall det är litet eller stort
    border-radius: 10px;
    border: 2px solid #045959;
    margin: 20px;
    background: transparent;
    width: 600px;
    height: 370px;
    
`;

export const ReviewHeader = styled.div`
display: flex;
justify-content: space-between;
padding-left: 25px;
margin-top: 20px;

`;
export const JobTitle = styled.h1`
   
    font-size: 16px;
    font-weight: bold;

`;
export const Company = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-top: 17px;
    
`;

export const Country = styled(CgSweden)`
color: black;
font-size: 1.8rem;
margin-right: 30px;
margin-top: 8px;

`;

export const ReviewBody = styled.p`
display: flex;
justify-content: center;
padding: 25px 25px 5px 25px;
margin-top: 5px;
line-height: 1.5;


`;

export const ReviewFooter = styled.div`
display: flex;
justify-content: space-between;
padding: 0 25px;
margin-top: 15px;


`;
export const ReviewReadmore = styled.span` // add functions soon
color: #045959;
font-weight: bold;
justify-self: flex-start;
margin-top:5px ;
cursor: pointer;


`;

export const ReadmoreIcon = styled(IoIosArrowDown)`
color: #045959;
margin-left: 5px;
font-size: 26px;
cursor: pointer;

`;
export const ReactionCounter = styled.input`

border: none;
background: none;
color: black;
font-size: 20px;
width: 30px;


pointer-events: none;

`;

export const  ThumbsUpButton = styled.button`
color: black;
background: none;
border: none;
font-size: 30px;
margin-left: 300px;


cursor: pointer;

`
export const  ThumbsDownButton = styled.button`
color: black;
background: none;
border: none;
font-size: 30px;



cursor: pointer;
`


export const ThumbsDownIcon = styled(FiThumbsDown)`
&:hover{
    color:#045959;
}

`;


export const ThumbsUpIcon = styled(FiThumbsUp)`
&:hover{
    color: #045959;
}
`;


/* Colors from figma

#F8F5F2 - BG
#045959 - Primary
#F45D48 - Alt accent color maybe
#F41E00 - alt alt accent color


 #173439 - Dark mode bg
#3DD68D  - Dark mode primary

https://codepen.io/giana/pen/BZaGyP hover on button


*/




