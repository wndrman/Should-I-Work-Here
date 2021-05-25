import styled from 'styled-components';
import {BiAtom} from "react-icons/bi"

export const AboutSec = styled.h1`
background-color: #F8F5F2;
color: #173439;
justify-content: center;
align-items: center;
display: flex;


`;

export const Header = styled.h1`
font-size: 50px;
color: #173439;
justify-content: center;
align-items: center;
display: flex;
margin: 70px;

`;
export const Columns = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 16px;
font-weight: 500;
margin: 150px 20px 150px 20px;
text-align: center;
`; 
export const Column1 = styled.p`
width: 40%;
`;
export const Column2 = styled.p`
width: 40%;
`;

export const Column1Body = styled.p`
line-height: 1.5;

`;

export const Column2Body = styled.p`

line-height: 1.5;

`;


export const Column2Title = styled.p`
margin-bottom: 10px;
font-weight: 600;

`;

export const Column1Title = styled.p`

font-weight: 600;
margin-bottom: 10px;


`;

export const Icon1 = styled(BiAtom)`
font-size: 50px;
margin-bottom: 20px;
`;

export const Icon2 = styled(BiAtom)`
font-size: 50px;
margin-bottom: 20px;

`;

export const FaqSection = styled.div`
`;


export const FaqHeader = styled.h1`
font-size: 50px;
color: #173439;
justify-content: center;
align-items: center;
display: flex;
margin: 70px;

`;

export const FaqBody = styled.p`

font-size: 18px;
font-weight: 500;
text-align: center;
justify-content: center;
align-items: center;
margin: 0px 120px 0px 120px;
line-height: 1.5;


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
