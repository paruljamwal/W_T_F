import styled from "styled-components";


export const MainNavBox=styled.div` 
border: 1px solid black;
display: flex;
background-color: rgb(13,13,13);
color: wheat;
height: 69px;
position: fixed;
justify-content: space-around;
font-weight: lighter !important;
font-size: 18px;
width: 100%;
z-index: 999999;
`;

export const LeftBox=styled.div` 
border: 1px solid transparent;
`;
export const LogoBox=styled.div` 
 height: 100%;
 border: 1px solid transparent;
`;

export const LogoImg=styled.img` 
 height: 100%;
 border: 1px solid transparent;
`;

export const RightBox=styled.div`
display: flex;
border: 1px solid transparent;
width: 55%;
text-align: center;

@media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    
  }
`;




export const FitnesBox=styled.div` 
flex: 1;
color: wheat;
 border: 1px solid transparent;
 margin:20px 10px 0px ;
 cursor: pointer;
 &:hover{
    color: whitesmoke;
    border-bottom-color: rgb(146,9,9);
}

@media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;



export const GymBox=styled.div` 
flex: 1;
border: 1px solid transparent;
margin:20px 10px 0px ;
cursor: pointer;
&:hover{
 color: whitesmoke;
 border-bottom-color: rgb(146,9,9);
}

@media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;



export const AboutBox=styled.div` 
flex: 1;
border: 1px solid transparent;
margin:20px 10px 0px ;
cursor: pointer;
&:hover{
 color: whitesmoke;
 border-bottom-color: rgb(146,9,9);
}

@media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;



export const PartnerBox=styled.div` 
flex: 1;
border: 1px solid transparent;
margin:20px 10px 0px ;
cursor: pointer;
&:hover{
 color: whitesmoke;
 border-bottom-color: rgb(146,9,9);
}

@media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;



export const LoginBox=styled.div` 
flex: 1;
border: 1px solid transparent;
margin:10px 10px;
cursor: pointer;

`;


export const NutritionBox=styled.div` 
flex: 1;
border: 1px solid transparent;
 margin:20px 10px 0px ;
 cursor: pointer;
 &:hover{
 color: whitesmoke;
 border-bottom-color: rgb(146,9,9);
}


@media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;


export const Button=styled.button` 
width: 70px;
height: 40px;
color: wheat;
cursor: pointer;
border: none;
margin: 3px;
font-weight: lighter !important;
border-radius: 7px;
background-color: rgb(146,9,9);
font-size: 15px;
&:hover{
 color: whitesmoke;
}

`;