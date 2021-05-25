import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index:1;
width: 100%;
max-width: 1500px;
margin-left: auto;
margin-right:auto;
padding-left:30px;
padding-right: 0px;

@media screen and (max-width:991px){
    padding-left:50px;
    padding-right: 30px;
}
`;
export const Button = styled.button`

border-radius: 8px;
background: ${({primary}) => (primary ? '#045959' : '#f8f5f2') };
white-space: nowrap;
padding: ${({big}) => (big ? '12px 48px' : '10px 50px') };
margin-right: 26px;
color: ${({primary}) => (primary ? '#fff' : '#045959') };
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px') };
border: 3px solid #045959;
outline: none;
cursor: pointer;

&:hover,:focus {
 
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
  --color: #173439;
  --hover: #045959;
}
   


@media screen and (max-width: 960px) {
    width: 60%;
    margin-bottom: 20px;
    
}

`
export default GlobalStyle