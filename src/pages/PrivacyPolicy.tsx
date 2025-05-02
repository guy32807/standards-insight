import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const LastUpdated = styled.p`
  color: #666;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: var(--primary-color);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.7;
`;

const SubSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
`;

const List = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | Standards Insight"
        description="Learn about how Standards Insight collects, uses, and protects your personal information."
      />
      
      <Container>
        <Header>
          <Title>Privacy Policy</Title>
          <LastUpdated>Last Updated: May 1, 2025</LastUpdated>
        </Header>
        
        <Section>
          <Paragraph>
            At Standards Insight, we respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data when you visit our website
            and tell you about your privacy rights and how the law protects you.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Information We Collect</SectionTitle>
          <Paragraph>
            We collect several different types of information for various purposes to provide and improve our service to you.
          </Paragraph>
          
          <SubSection>
            <SubTitle>Personal Data</SubTitle>
            <Paragraph>
              While using our site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
            </Paragraph>
            <List>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </List>
          </SubSection>
          
          <SubSection>
            <SubTitle>Usage Data</SubTitle>
            <Paragraph>
              We may also collect information about how the service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </Paragraph>
          </SubSection>
          
          <SubSection>
            <SubTitle>Tracking & Cookies Data</SubTitle>
            <Paragraph>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information.
            </Paragraph>
            <Paragraph>
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our service.
            </Paragraph>
            <Paragraph>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </Paragraph>
          </SubSection>
        </Section>
        
        <Section>
          <SectionTitle>Use of Data</SectionTitle>
          <Paragraph>
            Standards Insight uses the collected data for various purposes:
          </Paragraph>
          <List>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>Disclosure of Data</SectionTitle>
          <SubSection>
            <SubTitle>Legal Requirements</SubTitle>
            <Paragraph>
              Standards Insight may disclose your Personal Data in the good faith belief that such action is necessary to:
            </Paragraph>
            <List>
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of Standards Insight</li>
              <li>To prevent or investigate possible wrongdoing in connection with the service</li>
              <li>To protect the personal safety of users of the service or the public</li>
              <li>To protect against legal liability</li>
            </List>
          </SubSection>
        </Section>
        
        <Section>
          <SectionTitle>Security of Data</SectionTitle>
          <Paragraph>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Affiliate Disclosure</SectionTitle>
          <Paragraph>
            Standards Insight is a participant in affiliate marketing programs, including the ANSI Webstore affiliate program. This means we earn commissions from qualifying purchases made through our affiliate links at no extra cost to you.
          </Paragraph>
          <Paragraph>
            When you click on affiliate links on our website, cookies may be placed on your browser to track your activity for the purpose of crediting us with any purchases you make. These cookies do not store any personal information but simply allow us to be compensated for referring you to these products or services.
          </Paragraph>
          <Paragraph>
            We only recommend products and services that we believe are of high quality and would be valuable to our audience. Our affiliate relationships do not influence the content we create or the standards we recommend.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Your Data Protection Rights</SectionTitle>
          <Paragraph>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </Paragraph>
          <List>
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete information you believe is incomplete.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>Changes to This Privacy Policy</SectionTitle>
          <Paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </Paragraph>
          <Paragraph>
            We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
          </Paragraph>
          <Paragraph>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about this Privacy Policy, please contact us:
          </Paragraph>
          <List>
            <li>By email: privacy@standardsinsight.com</li>
            <li>By phone: (555) 555-5555</li>
            <li>By mail: 123 Standards Avenue, New York, NY 10001</li>
          </List>
        </Section>
      </Container>
    </>
  );
};

export default PrivacyPolicy;