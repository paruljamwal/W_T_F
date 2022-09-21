import React from 'react'
import styled from 'styled-components';
import logo from '../Assests/logo.png'
const Footer = () => {
  return (
    <div>
      <FooterDiv>
        <SocialIcon>
   
           <Logo src={logo} alt="" />
         
          <LogoBox>
          <Logos1  src='https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg' ></Logos1>
          <Logos2 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7ylSJeYnO1zUx3m8VmsJC3PBornZXnk_mg&usqp=CAU' ></Logos2>
          <Logos3 src="data:image/png;base64,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" ></Logos3>
          </LogoBox>

        </SocialIcon>
        <QuickLink>
        <LargeText>Quick Links</LargeText>
              <SmallText>About</SmallText>
              <SmallText>FAQs</SmallText>
              <SmallText>Privacy Policy</SmallText>
              <SmallText>WTF in News</SmallText>
              <SmallText>Terms & Conditions</SmallText>
              <SmallText>Refund & Cancellation</SmallText>

        </QuickLink>
        <ExploreDiv>
        <LargeText>Explore</LargeText>
        <SmallText>Arenas</SmallText>
        <SmallText>Studios</SmallText>
        <SmallText>Nutrition</SmallText>
           
        </ExploreDiv>
        <ContactDiv>
        <LargeText>Contact</LargeText>
        <SmallText>
          RO:S 1502, Amrapali Silicon city, Sector 76, Noida, Uttar Pradesh, India
        </SmallText>
        <SmallText>
          Ho: C-86 B, Ground Floor, Sector 8, Noida Urrar Pradesh, India
        </SmallText>
        <SmallText>
          +919090639005
        </SmallText>
        <SmallText>
          support@wtfup.me
        </SmallText>
         
        </ContactDiv>
      </FooterDiv>
    </div>
  )
}

export default Footer;


const FooterDiv=styled.div` 
margin-top: 30px;
width: 99%;
display: flex;
border: 1px solid transparent;
/* height: 400px; */
justify-content: space-around;

@media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
 margin:auto;
 width:80%;
 flex-direction:column;
 border: 2px solid transparent;
 flex-wrap: wrap;
} 


`;


const SocialIcon=styled.div` 
border: 1px solid transparent;
flex: 1;
margin: 20px;

@media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
    /* margin: auto 5% ; */
    
} 


`;

const QuickLink=styled.div` 
border: 1px solid transparent;
flex: 1;
margin: 20px;

`;

const ExploreDiv=styled.div` 
border: 1px solid transparent;
flex: 1;
margin: 20px;

`;

const ContactDiv=styled.div` 
border: 1px solid transparent;
flex: 1;
margin: 20px;

`;



const SmallText=styled.div` 
color: white;
padding: 10px;
cursor: pointer;
`;



const LargeText=styled.div` 
color: white;
padding: 10px;
font-size: larger;
font-weight: bolder;
cursor: pointer;

`;

const LogoBox=styled.div` 
display: flex;
`;

const Logo=styled.img` 
display: flex;
width: 90px;
margin: auto;

`;

const Logos1=styled.img` 
 width: 50px;
 margin: 20px;
 background-color: white;
 height: 50px;
 border-radius: 30px;
 cursor: pointer;
`;

const Logos2=styled.img` 
 color: blue;
 margin: 20px;
 width: 50px;
 height: 50px;
 border-radius: 25px;
 cursor: pointer;
`;

const Logos3=styled.img` 
 color: blue;
 margin: 20px;
 width: 50px;
 height: 50px;
  background-color: white;
  border-radius: 25px;
  cursor: pointer;
`;