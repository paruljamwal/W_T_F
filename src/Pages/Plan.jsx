import React from 'react'
import styled from 'styled-components'
const Plan = () => {
  return (
    <MainBox>
           <TopBox>
            <Text> WTF: The Fitness Point Gym </Text>
            <Button>111 Ratings</Button>
           </TopBox>
           <p>Sector 53, Noida</p>
           <Description>
              <LeftBox>
                <P>Description</P>
                <P>THE BEST GYM</P>
              <P>Facilities</P>
                <SmallBox>
                    <TextBox>
                    <SmallBoxes/>
                     <p>ac</p>
                    </TextBox>

                    <TextBox>
                    <SmallBoxes3/>
                    <p>santized</p>
                    </TextBox>

                    <TextBox>
                    <SmallBoxes2/>
                    <p>parking</p>

                    </TextBox>


                </SmallBox>

              <P>Why to choose WTF? </P>

                <BigBox>
                    <BigBoxes/>
                    <BigBoxes/>
                    <BigBoxes/>
                    <BigBoxes/>

                </BigBox>


              <P>How it works?</P>
              </LeftBox>

              <RightBox>
                <h1>Choose Membership</h1>
                <RightSmall1 >
                   <H> Plan  1 </H> 
                    <ChooseDiv>
                   <P1> Slim your waist </P1>
                   <ChooseBtn> ₹ 2342</ChooseBtn>
                    </ChooseDiv>
                     </RightSmall1>

                     <RightSmall2 >
                   <H> Plan  2 </H> 
                    <ChooseDiv>
                   <P2> Gaint X</P2>
                   <ChooseBtn> ₹ 9999</ChooseBtn>
                    </ChooseDiv>
                     </RightSmall2>


                     <RightSmall3 >
                   <H> Plan  3 </H> 
                    <ChooseDiv>
                   <P3> Beach Body</P3>
                   <ChooseBtn> ₹ 6999</ChooseBtn>
                    </ChooseDiv>
                     </RightSmall3>


                     <RightSmall4 >
                   <H> Plan  4 </H> 
                    <ChooseDiv>
                   <P4> Fat To Fit</P4>
                   <ChooseBtn> ₹ 6999</ChooseBtn>
                    </ChooseDiv>
                     </RightSmall4>

                     <RightSmall5 >
                   <H> Plan  5 </H> 
                    <ChooseDiv>
                   <P1> FPG(2 Months)</P1>
                   <ChooseBtn> ₹ 2799</ChooseBtn>
                    </ChooseDiv>
                    <p></p>
                     </RightSmall5>


                     <RightSmall2 >
                   <H> Plan  6 </H> 
                    <ChooseDiv>
                   <P2> FPG(12 Months)</P2>
                   <ChooseBtn> ₹ 11999</ChooseBtn>
                    </ChooseDiv>
                    <p></p>
                     </RightSmall2>

                     <RightSmall7 >
                   <H> Plan  7 </H> 
                    <ChooseDiv>
                   <P3> FPG (6 Months)</P3>
                   <ChooseBtn> ₹ 6999</ChooseBtn>
                    </ChooseDiv>
                     </RightSmall7>

                     <RightSmall8 >
                   <H> Plan  8 </H> 
                    <ChooseDiv>
                   <P4>FPG (3 Months)</P4>
                   <ChooseBtn> ₹ 3999</ChooseBtn>
                    </ChooseDiv>
                     </RightSmall8>

              </RightBox>
           </Description>
    </MainBox>
  )
}

export default Plan



const MainBox=styled.div`
    border:'1px solid white';
    width:90%;
    height:300px;
    color:white;
    margin:10px auto;

`;


const TopBox=styled.div`
    display:flex;
    border:'1px solid white';
    justify-content:space-between;
`;





const Text=styled.p`
font-size:50px;
    color:white;


`;


const P=styled.p`

    color:white;


`;

const P1=styled.p`
  color:rgb(186,255,131);
  font-weight:bolder;
  font-size:25px;  

`;

const P2=styled.p`
  color:rgb(180,31,109);
  font-weight:bolder;
  font-size:25px;  

`;

const P3=styled.p`
  color:rgb(253,136,136);
  font-weight:bolder;
  font-size:25px;  

`;

const P4=styled.p`
  color:rgb(0,209,255);
  font-weight:bolder;
  font-size:25px;  

`;


const H=styled.p`
     margin:5px;  
    color:white;
    font-size:30px;


`;


const ChooseDiv=styled.div`
     margin:5px;  
     color:white;
     display:flex;
     justify-content:space-between 



`;

const ChooseBtn=styled.button`
     margin:5px;  
     display:flex;
     color:white;
     width:80px;
     height:30px;
     font-weight:bold;
     background:#c9f9b63f;
     border:none;
     border-radius:5px;
     text-align:center;
     padding:7px 15px;

`;




const Button=styled.button`
    width:150px;
    height:50px;
    background :rgb(146,9,9);
    color:white;
    font-size:larger

`;


const Description=styled.div`
    display:flex;
    border:'1px solid white';
`;


const LeftBox=styled.div`
border:'1px solid white';

`;





const TextBox=styled.div`
display:flex;
flex-direction:column;
text-align:center;
margin:10px;

`;

const SmallBox=styled.div`
display:flex;


`;

const SmallBoxes=styled.div`
width:50px;
height:50px;
background:rgb(146,9,9);
margin:5px;

`;

const SmallBoxes2=styled.div`
width:50px;
height:50px;
background:rgb(146,9,9);
margin:5px;
border-radius:5px;

`;

const SmallBoxes3=styled.div`
width:50px;
height:50px;
background:rgb(146,9,9);
margin:5px;
border-radius:3px;

`;

const BigBox=styled.div`
display:flex;


`;



const BigBoxes=styled.div`
width:150px;
height:150px;
background:rgb(146,9,9);
margin:5px;
border-radius:3px;


`;

const RightBox=styled.div`
border:'1px solid white';
background:rgb(46,46,46);
width:50%;
border-radius:15px;
margin-left:30px;
padding:10px; 

`;


const RightSmall1=styled.div`
  width:95%;
  margin:10px auto;
  background:rgb(97,152,112);
  border-radius:10px; 
  
 
`;

const RightSmall2=styled.div`
  width:95%;
  margin:10px auto;
  background:rgb(144,86,116);
  border-radius:10px; 
  
 
`;

const RightSmall3=styled.div`
  width:95%;
  margin:10px auto;
  background:rgb(174,65,64);
  border-radius:10px; 
  
 
`;

const RightSmall4=styled.div`
  width:95%;
  margin:10px auto;
  background:rgb(63,120,165);
  border-radius:10px; 
  
 
`;

const RightSmall5=styled.div`
  width:95%;
  margin:10px auto;
  background:rgb(97,152,112);
  border-radius:10px; 
  
 
`;

const RightSmall6=styled.div`
  width:95%;
  margin:10px auto;
  background:rgb(63,120,165);
  border-radius:10px; 
  
 
`;

const RightSmall7=styled.div`
  width:95%;
  margin:10px auto;
  background:rgb(169,69,67);
  border-radius:10px; 
  
 
`;

const RightSmall8=styled.div`
  width:95%;
  margin:10px auto;
  background:#66a4d0;
  border-radius:10px; 
  
 
`;