import React, {useState} from 'react'
import { Container } from '../../globalStyles'
import FAQ from './FAQ';

import { 
    AboutSec, 
    Header, 
    Columns, 
    Column1,
    Icon1,
    Icon2,
    Column1Title,
    Column1Body, 
    Column2,
    Column2Body,
    Column2Title,
    FaqHeader,
    FaqSection,
    FaqBody } from "./AboutSection.elements";

        

const AboutSection = () => {


    const [faqs, setFaqs] = useState([

        {
            question: 'Are reviews anonymous?',
            answer: 'Siwh reviews are totally anonymous, empowering you to share your honest thoughts and feedback on your prior professional interactions.',
            open: false
        },
        {
            question: 'Is Siwh free?',
            answer: 'Yes! Siwh is totally free for employees to use, and we plan to keep it that way for all of the products we build that support employees.',
            open: false
        },
        {
            question: "Do you moderate reviews?",
            answer: "In order to keep the review platform high quality, we personally moderate every review that gets put on the platform.",
            open: false
        },
        {
            question: "How do you make money?",
            answer: "Right now, we don't! We have some ideas for monetisation further down the line, but our aim is to never charge people for anything we build.",
            open: false
        },

        ]);

        const toggleFAQ = index => {
            setFaqs(faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open
                } else {
                    faq.open = false;
                }

                return faq;
            }))
        }
    
    
    return (
        <>
            <AboutSec>
                <Container>
                    <Header>Here is why we exist</Header>
                    <Columns>
                        <Column1>
                        <Icon1 />
                        <Column1Title>  Raising Transparency in the hiring process </Column1Title>
                        <Column1Body>
                        Searching for a job is hard work! Searching for the right fit is even harder. 
                        We believe raising transparency in the hiring ecosystem will create a net 
                        positive for everyone involved.
                        </Column1Body>
                        </Column1>
                        <Column2>
                        <Icon2 />
                        <Column2Title> Supporting Interviewees </Column2Title>
                        <Column2Body>
                        We believe that knowing what you're getting yourself in to is half the battle.
                        We're passionate about supporting interviewws on their journey in any way that we can, 
                        and are building out a roadmap of products that reflects that.
                        </Column2Body>
                        </Column2>
                    </Columns>

                    <FaqSection>
                        <FaqHeader>
                            Frequently Asked Questions
                        </FaqHeader>
                        <FaqBody>
                        Got a question? We've got answers. If you can't find the answers your looking for, 
                        send the question down on the feeback section at the bottom of the page and ask away!
                        </FaqBody>

                        <div className="faqs">
                            {faqs.map((faq, i) => ( 
                                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                            
                            ))}
                        </div>
                    </FaqSection>
                    
                </Container>
            </AboutSec>
        </>
    )
                            };

export default AboutSection;
