import React from 'react'
import styled from 'styled-components';
import { FaLifeRing} from 'react-icons/fa';
const Experience = () => {
  return (
    <div>
        <MainBox>
          <InnerBox>
            <TextBox>
                <Text>WTF Fitness Experience?</Text>
             <LowerBox>
                <LowerDiv></LowerDiv>
                <LowerText>@your regular gym cost?</LowerText>
             </LowerBox>
            </TextBox>
            <IconBox>
                <IconBoxes>
                    <Logo>
                    <FaLifeRing/>
                    </Logo>
                    <LogoText>
                        Modern Equipment
                    </LogoText>
                </IconBoxes>
                <IconBoxes>
                <Logo>
                    <FaLifeRing/>
                    </Logo>
                    <LogoText>
                        Skilled Trainer
                    </LogoText>
                </IconBoxes>
                <IconBoxes>
                <Logo>
                    <FaLifeRing/>
                    </Logo>
                    <LogoText>
                        Top class Ambiance
                    </LogoText>
                </IconBoxes>
                <IconBoxes>
                <Logo>
                    <FaLifeRing/>
                    </Logo>
                    <LogoText>
                        Sanitized GYMS
                    </LogoText>
                </IconBoxes>
            </IconBox>
          </InnerBox>
        </MainBox>
    </div>
  )
}

export default Experience;


const MainBox=styled.div`
  width  :100%;
  height: 300px;
  background-color: rgb(202,21,21);


@media only screen and (max-width: 768px) {
  height: 500px;
}
@media only screen and (max-width: 425px) {
  height: 600px;
  border: 2px solid transparent;
  width: 98%;
  overflow-x: hidden;

} 




`;

const InnerBox=styled.div`
  display: flex;
  border: 1px solid transparent;
  

  @media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
flex-direction:column;
border: 2px solid transparent;

} 


`;


const LowerBox=styled.div`
  display: flex;
  border: 1px solid transparent;
  width: 45%;
  margin: -40px auto;


  @media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
  border: 2px solid transparent;
display: none;
} 


`;

const LowerDiv=styled.div`
  border: 1px solid transparent;
  width: 70px;
  height: 143px;
  background-color:rgb(251,94,94);
  margin: 5px 1px 1px 16px;


  @media only screen and (max-width: 768px) {
   display: none;
}
@media only screen and (max-width: 425px) {
 display: none;
} 



`;

const LowerText=styled.p`
  font-size:25px;
  font-weight: lighter;
  color: white;
  margin: 10px  10px 0px 15px;
  font-weight: 300;


  @media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {

} 


`;

const TextBox=styled.div`
  flex:3;
  width  :100%;
  border: 1px solid transparent;
  padding:0px  20px 0px 20px; 




  @media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {

} 
 
`;


const Text=styled.p`
color: white;
padding:0px  20px 0px 30%; 
margin-top: 0%;
font-size:50px;
border: 1px solid transparent;
font-weight: bolder;


@media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
font-size:40px;
padding:0px  20px 0px 2%; 
width: 80%;

}

`;



const IconBox=styled.div`
  width  :90%;
  border: 1px solid transparent;
  flex: 4;
  display: flex;
  
  @media only screen and (max-width: 768px) {
  
  }
  @media only screen and (max-width: 425px) {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2px 2px;
  margin: 25px auto;
  border: 2px solid transparent;


  } 

`;


const IconBoxes=styled.div`
  border: 1px solid transparent;
  width: 130px;
  height: 130px;
  border-radius: 15px;
  background-color: rgb(203,56,56);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  margin:15% 20px;




`;


const Logo=styled.div`
color: white;
text-align: center;
margin: 15% auto;
font-size: larger;
`;



const LogoText=styled.div`
color: white;
text-align: center;

`;