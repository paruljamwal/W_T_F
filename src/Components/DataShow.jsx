import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./DataShow.css";
import { BsStarFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { FetchData } from "../Redux/Search/action";
const DataShow = () => {
  const dispatch = useDispatch();
  const gym = useSelector((store) => store.gym.gymData);
  // console.log(gym,"gym")

  useEffect(() => {
    dispatch(FetchData());
  }, []);

  return (
    <DataShowBox>
      {gym &&
        gym.map((e) => (
          <div>
            <DataBox
              key={e.id}
              style={{
                backgroundImage: "url(" + `  ${e.cover_image}` + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <GymData>
                <GymName>{e.gym_name}</GymName>
                <Star>
                  {/* {
                e.rating ? "" : ""
              } */}
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
                <p>
                  {e.state} {e.city} {e.address1} {e.address2}
                </p>
                <P>
                  {" "}
                  <Arrow>
                    <FaLocationArrow />
                  </Arrow>{" "}
                  {e.distance_text} | {e.duration_text}
                </P>
                {/* <GymImg src={e.cover_image} alt={`gym img ${e.name} `} /> */}

                <LowerBox>
                  <Rupee>
                    {e.plan_duration} {e.plan_name} {e.plan_price}
                  </Rupee>

                  <BookNow>BOOK</BookNow>
                </LowerBox>
              </GymData>
            </DataBox>
          </div>
        ))}
    </DataShowBox>
  );
};

export default DataShow;

const DataShowBox = styled.div`
  color: white;
  display: flex;
  border: 1px solid transparent;
  margin-left: 10px 10px 20px 20px;
  height: 900px;
  width: 65%;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: auto;
  scroll-behavior: smooth;
  flex-direction: column;
  z-index: 9999;
  position: relative;
  @media only screen and (max-width: 768px) {
    overflow-x: hidden;
  }
  @media only screen and (max-width: 425px) {
    width: 95%;
    margin: auto;
    height: 400px;
    overflow: none;
    overflow-x: hidden;
  }
`;

const DataBox = styled.div`
  border: 1px solid transparent;
  margin: 10px auto;
  height: 300px;
  border-radius: 10px;
  width: 90%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

const P = styled.p`
  font-size: large;
`;

const Arrow = styled.span`
  color: green;
`;

const GymData = styled.div`
  border: 1px solid transparent;
  width: 60%;
  margin-left: 40%;
  filter: blur(0);
  transition: transform 1s, filter 0.5s ease-out;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    margin-left: 1px;
  }

  &:hover {
    transition: transform 1s, filter 1s ease-in;
    filter: blur(2px);
    transform: scale(1);
  }
`;

const GymName = styled.p`
  font-size: 25px;
  font-weight: bolder;
  color: whitesmoke;
`;

const Star = styled.div`
  display: flex;
  margin-top: 1px;
`;

const StarImg = styled.div`
  margin: 3px;
`;

const LowerBox = styled.div`
  display: flex;
  border: 1px solid transparent;
  margin-top: 50px;
`;

const Rupee = styled.p`
  color: rgb(255, 224, 0);
  font-size: larger;
  font-weight: 700;
  border: 1px solid transparent;
  width: 90%;
`;

const BookNow = styled.button`
  width: 140px;
  height: 45px;
  border-radius: 2px;
  color: white;
  background-color: rgb(146, 9, 9);
  border: none;
  outline: none;
  cursor: pointer;
  margin: 5px;
`;
