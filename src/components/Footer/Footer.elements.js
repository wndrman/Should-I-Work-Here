import styled from 'styled-components'

export const FooterContainer = styled.div`
background-color: #045959;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow-x: hidden;

`;

export const FooterSubscription = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #fff;

`;

export const FooterSubheading = styled.p`


margin-bottom: 24px;
font-size: 24px;

`;

export const FooterSubText = styled.p`
margin-bottom: 24px;
font-size: 20px;

`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
width: 800px;

@media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
}
`

export const FormInput = styled.textarea`
padding: 10px 20px;
width: 100%;
height: 200px;
border-radius: 2px;
background-color: #F8F5F2;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #F8F5F2;
margin-bottom: 20px;


&::placeholder {
    color: #878787;
}

@media screen and (max-width:820px) {
margin: 0 0 16px 0;
}

`;