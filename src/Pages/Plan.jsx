import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import styled from "styled-components";
const Plan = () => {
  const [filterData, setFilterData] = useState([]);
  const [terms, setTerms] = useState([]);
  const gymId = localStorage.getItem("gym_id");
  const fetchData = () => {
    axios(`https://wtfgym.herokuapp.com/db`).then((r) =>
      setFilterData(r.data.data)
    );
  };

  const fetchTerms = () => {
    axios(`https://wtfgym.herokuapp.com/terms`).then((r) => setTerms(r.data));
  };

  let newData = filterData.filter((e) => {
    if (e.user_id === gymId) {
      return e;
    }
  });
  // console.log(newData,"newData");
  // console.log(filterData, "f");
  // console.log(gymId,"gymId");
  useEffect(() => {
    fetchData();
    fetchTerms();
  }, []);


  return (
    <>
      <div>
        <GymImg
          src="https://media.giphy.com/media/hlh2xvhZOfzji/giphy.gif"
          alt=""
        />
      </div>

      {newData &&
        newData.map((e) => (
          <MainBox>
            <TopBox>
              <Text> {e.slug} </Text>
              <Button>
                <Star>
                  <StarImg>
                    <BsStarFill />
                  </StarImg>
                  <StarImg>
                    <BsStarFill />
                  </StarImg>
                  <StarImg>
                    <BsStarFill />
                  </StarImg>
                  <StarImg>
                    <BsStarFill />
                  </StarImg>
                  <StarImg>
                    <BsStarFill />
                  </StarImg>
                </Star>
                {e.total_rating} Ratings
              </Button>
            </TopBox>
            <p>
              {e.address1}, {e.city}
            </p>
            <Description>
              <LeftBox>
                <P>Description</P>
                <PDesc>
                  <p>
                    It helps people to find you. Considering that all your
                    competitors already have a website,
                  </p>
                </PDesc>
                <P>Facilities</P>
                <SmallBox>
                  {e &&
                    e.benefits.map((e) => (
                      <TextBox>
                        <SmallBoxes />
                        <p>{e.name}</p>
                      </TextBox>
                    ))}
                </SmallBox>

                <P>Why to choose WTF? </P>

                <BigBox>
                  {terms.map((e) => (
                    <BigBoxes>
                      <img src={e && e.icon} alt="terms icon" />
                      <P>{e.name}</P>
                    </BigBoxes>
                  ))}
                </BigBox>

                <P>How it works?</P>

                <Work>
                  <img
                    style={{ width: "40px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdbgLkbD4_sl4Ysku-zia8V7BCgMDmfwj9Q&usqp=CAU"
                    alt=""
                  />
                  <p>
                    Pick membership start date and complete your subscription
                    process by clicking Buy Now belos
                  </p>
                </Work>

                <Work>
                  <img
                    style={{ width: "40px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdbgLkbD4_sl4Ysku-zia8V7BCgMDmfwj9Q&usqp=CAU"
                    alt=""
                  />
                  <p>
                    Pick membership start date and complete your subscription
                    process by clicking Buy Now belos
                  </p>
                </Work>

                <Work>
                  <img
                    style={{ width: "40px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdbgLkbD4_sl4Ysku-zia8V7BCgMDmfwj9Q&usqp=CAU"
                    alt=""
                  />
                  <p>
                    Pick membership start date and complete your subscription
                    process by clicking Buy Now belos
                  </p>
                </Work>
              </LeftBox>

              <RightBox>
                <h1>Choose Membership</h1>
                <RightSmall1>
                  <H> Plan 1 </H>
                  <ChooseDiv>
                    <P1> Slim your waist </P1>
                    <ChooseBtn> ₹ {e.plan_price}</ChooseBtn>
                  </ChooseDiv>
                </RightSmall1>

                <RightSmall2>
                  <H> Plan 2 </H>
                  <ChooseDiv>
                    <P2> Gaint X</P2>
                    <ChooseBtn> ₹ 9999</ChooseBtn>
                  </ChooseDiv>
                </RightSmall2>

                <RightSmall3>
                  <H> Plan 3 </H>
                  <ChooseDiv>
                    <P3> Beach Body</P3>
                    <ChooseBtn> ₹ {e.plan_price}</ChooseBtn>
                  </ChooseDiv>
                </RightSmall3>

                <RightSmall4>
                  <H> Plan 4 </H>
                  <ChooseDiv>
                    <P4> Fat To Fit</P4>
                    <ChooseBtn> ₹ 6999</ChooseBtn>
                  </ChooseDiv>
                </RightSmall4>

                <RightSmall5>
                  <H> Plan 5 </H>
                  <ChooseDiv>
                    <P1> FPG(2 Months)</P1>
                    <ChooseBtn> ₹ 2799</ChooseBtn>
                  </ChooseDiv>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </RightSmall5>

                <RightSmall2>
                  <H> Plan 6 </H>
                  <ChooseDiv>
                    <P2> FPG(12 Months)</P2>
                    <ChooseBtn> ₹ 11999</ChooseBtn>
                  </ChooseDiv>
                  <p>{e.description}</p>
                </RightSmall2>

                <RightSmall7>
                  <H> Plan 7 </H>
                  <ChooseDiv>
                    <P3> FPG (6 Months)</P3>
                    <ChooseBtn> ₹ 6999</ChooseBtn>
                  </ChooseDiv>
                  <p>{e.description}</p>
                </RightSmall7>

                <RightSmall8>
                  <H> Plan 8 </H>
                  <ChooseDiv>
                    <P4>FPG (3 Months)</P4>
                    <ChooseBtn> ₹ 3999</ChooseBtn>
                  </ChooseDiv>
                  <P>{e.description}</P>
                </RightSmall8>
              </RightBox>
            </Description>
            <LowerDiv>
              <LowerDivBox>
                <Book>Buy now</Book>
                <Buy>Book 1 day free session</Buy>
              </LowerDivBox>
            </LowerDiv>
          </MainBox>
        ))}
    </>
  );
};

export default Plan;

const MainBox = styled.div`
  border: "3px solid red";
  width: 97%;
  height: 300px;
  color: white;
  margin: 10px auto;

  @media only screen and (max-width: 768px) {
    width: 90%;
    
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }

`;

const TopBox = styled.div`
  display: flex;
  border: "1px solid white";
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 50px;
  color: white;
`;

const P = styled.p`
  color: white;
`;

const P1 = styled.p`
  color: rgb(186, 255, 131);
  font-weight: bolder;
  font-size: 25px;
`;

const P2 = styled.p`
  color: rgb(180, 31, 109);
  font-weight: bolder;
  font-size: 25px;
`;

const P3 = styled.p`
  color: rgb(253, 136, 136);
  font-weight: bolder;
  font-size: 25px;
`;

const PDesc = styled.div`
  width: 70%;
`;

const P4 = styled.p`
  color: rgb(0, 209, 255);
  font-weight: bolder;
  font-size: 25px;
`;

const GymImg = styled.img`
  width: 100%;
  height: 350px;
`;

const H = styled.p`
  margin: 5px;
  color: white;
  font-size: 30px;
`;

const ChooseDiv = styled.div`
  margin: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Work = styled.div`
  width: 100%;
  border: 0px solid red;
  height: 50px;
  display: flex;
  margin: 20px auto;
`;


const ChooseBtn = styled.button`
  margin: 5px;
  display: flex;
  color: white;
  width: 80px;
  height: 30px;
  font-weight: bold;
  background: #c9f9b63f;
  border: none;
  border-radius: 5px;
  text-align: center;
  padding: 7px 15px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 150px;
  height: 70px;
  background: rgb(146, 9, 9);
  color: white;
  font-size: larger;
`;

const Description = styled.div`
  display: flex;
  border: "1px solid white";


  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }


`;

const LeftBox = styled.div`
  border: "3px solid red";
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
`;

const SmallBox = styled.div`
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SmallBoxes = styled.div`
  width: 50px;
  height: 50px;
  background: rgb(146, 9, 9);
  margin: 5px;
`;

const BigBox = styled.div`
  display: flex;
  width: 500px;
  overflow: hidden;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {

  }
  @media only screen and (max-width: 425px) {
    width: 400px;
    border: 0px solid red;
    margin-left: 2px;
  }
`;

const BigBoxes = styled.div`
  width: 150px;
  height: 150px;
  background: rgb(146, 9, 9);
  margin: 5px;
  border-radius: 3px;
  text-align: center;
`;

const RightBox = styled.div`
  border: "1px solid white";
  background: rgb(46, 46, 46);
  width: 50%;
  border-radius: 15px;
  margin-left: 15%;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    border: 0px solid red;
    margin: 5px;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    border: 0px solid red;
    margin-left: 2px;
  }
`;

const RightSmall1 = styled.div`
  width: 95%;
  margin: 10px auto;
  background: rgb(97, 152, 112);
  border-radius: 10px;
  padding: 6px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;

const RightSmall2 = styled.div`
  width: 95%;
  margin: 10px auto;
  background: rgb(144, 86, 116);
  border-radius: 10px;
  padding: 6px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;

const RightSmall3 = styled.div`
  width: 95%;
  margin: 10px auto;
  background: rgb(174, 65, 64);
  border-radius: 10px;
  padding: 6px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;

const RightSmall4 = styled.div`
  width: 95%;
  margin: 10px auto;
  background: rgb(63, 120, 165);
  border-radius: 10px;
  padding: 6px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;

const RightSmall5 = styled.div`
  width: 95%;
  margin: 20px auto;
  padding: 6px;
  background: rgb(97, 152, 112);
  border-radius: 10px;
  padding: 6px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;


const RightSmall7 = styled.div`
  width: 95%;
  margin: 10px auto;
  background: rgb(169, 69, 67);
  border-radius: 10px;
  padding: 6px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;

const RightSmall8 = styled.div`
  width: 95%;
  margin: 10px auto;
  background: #66a4d0;
  border-radius: 10px;
  padding: 6px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;

const Star = styled.div`
  display: flex;
  margin-top: 1px;
`;

const StarImg = styled.div`
  margin: 3px;
`;

const LowerDiv = styled.div`
  background-color: rgb(24, 24, 24);
  height: 200px;
  display: flex;
  margin-top: 5%;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    height: 200px;
  }
`;

const LowerDivBox = styled.div`
  border: 0px solid red;
  height: 60px;
  margin: auto;
  width: 80%;
  
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    
    height: 200px;


   }
`;

const Book = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: larger;
  width: 250px;
  height: 60px;
  color: white;
  background-color: rgb(112, 24, 26);
  
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    margin:30px auto  ;
    width: 300px;
  }
`;

const Buy = styled.button`
  border: 2px solid #414141;
  border-radius: 10px;
  font-size: larger;
  width: 250px;
  cursor: pointer;
  height: 60px;
  color: white;
  background: #272727;
  margin-left: 50%;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    margin : 4px;
    width: 300px;

  }
`;
