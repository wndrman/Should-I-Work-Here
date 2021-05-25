import React from 'react'
import {Button} from '../../globalStyles'
import {FooterContainer, FooterSubscription, FooterSubheading, FooterSubText, Form, FormInput} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubheading>
                    Shoot us some Feedback!
                </FooterSubheading>
                <FooterSubText>
                    We'll read every comment. Promise.
                </FooterSubText>
                <Form>
                    <FormInput textarea="Feedback" type="textarea" placeholder="Write your feedback" />
                    
                </Form>
                <Button>Send feeback</Button>
            </FooterSubscription>
        </FooterContainer>
    ) 
}

export default Footer
