import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Button from '../components/Button';

const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const ContactInfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff;
  border-radius: 50%;
`;

const ContactText = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const ContactForm = styled.form`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const FaqSection = styled.div`
  margin-top: 4rem;
`;

const FaqTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const FaqList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FaqItem = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
`;

const FaqQuestion = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
`;

const FaqAnswer = styled.p`
  color: #555;
`;

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically connect to a backend service
    alert('Thank you for your message! This is a demo form; in a real site, your message would be sent to our team.');
  };

  return (
    <>
      <SEO 
        title="Contact Standards Insight | Get in Touch With Our Team"
        description="Have questions about industry standards? Contact our team of experts for guidance on implementing standards in your organization."
      />
      
      <ContactContainer>
        <ContactHeader>
          <Title>Contact Us</Title>
          <Subtitle>
            Have questions about standards? Our team is here to help you navigate the complex world of industry standards.
          </Subtitle>
        </ContactHeader>
        
        <ContactContent>
          <ContactInfo>
            <ContactInfoTitle>Get in Touch</ContactInfoTitle>
            <ContactInfoText>
              Whether you have questions about specific standards, need guidance on implementation, or want to learn more about our resources, we're here to help. Feel free to reach out using any of the methods below.
            </ContactInfoText>
            
            <ContactItem>
              <ContactIcon><i className="fas fa-envelope"></i></ContactIcon>
              <ContactText>
                <a href="mailto:info@standardsinsight.com">info@standardsinsight.com</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon><i className="fas fa-phone-alt"></i></ContactIcon>
              <ContactText>
                <a href="tel:+15555555555">(555) 555-5555</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon><i className="fas fa-map-marker-alt"></i></ContactIcon>
              <ContactText>
                123 Standards Avenue<br />
                New York, NY 10001
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon><i className="fas fa-clock"></i></ContactIcon>
              <ContactText>
                Monday - Friday: 9:00 AM - 5:00 PM EST
              </ContactText>
            </ContactItem>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" required />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" required />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" required />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required></Textarea>
            </FormGroup>
            
            <Button type="submit" variant="primary" size="large" fullWidth>
              Send Message
            </Button>
          </ContactForm>
        </ContactContent>
        
        <FaqSection>
          <FaqTitle>Frequently Asked Questions</FaqTitle>
          <FaqList>
            <FaqItem>
              <FaqQuestion>How can I purchase standards?</FaqQuestion>
              <FaqAnswer>
                You can purchase standards directly through the ANSI Webstore, which we link to throughout our site. We provide guidance on finding the right standards for your needs.
              </FaqAnswer>
            </FaqItem>
            
            <FaqItem>
              <FaqQuestion>Do you offer consulting services?</FaqQuestion>
              <FaqAnswer>
                While our primary focus is providing information and resources, we can connect you with qualified consultants for implementation assistance. Contact us for recommendations.
              </FaqAnswer>
            </FaqItem>
            
            <FaqItem>
              <FaqQuestion>How do I know which standards apply to my business?</FaqQuestion>
              <FaqAnswer>
                Our blog articles provide guidance on standards relevant to different industries. For specific advice, contact us with details about your business, and we'll point you in the right direction.
              </FaqAnswer>
            </FaqItem>
            
            <FaqItem>
              <FaqQuestion>Are your affiliate links the same price as buying directly?</FaqQuestion>
              <FaqAnswer>
                Yes! When you use our affiliate links to purchase standards, you pay the same price as buying directly. The small commission we receive helps support our free educational content.
              </FaqAnswer>
            </FaqItem>
          </FaqList>
        </FaqSection>
      </ContactContainer>
    </>
  );
};

export default ContactPage;