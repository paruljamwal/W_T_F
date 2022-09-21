import React from "react";
import styled from "styled-components";
import BackPoster from "../Assests/Poster.png";
const Poster = () => {
  return (
    <PosterDiv>
      <Div></Div>
      <PosterImg src={BackPoster} alt="" />
    </PosterDiv>
  );
};

export default Poster;

const PosterDiv = styled.div`
  width: 99%;
`;

const Div = styled.div`
  height: 75px;
  width: 95%;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
  }
`;

const PosterImg = styled.img`
  width: 100%;
  background-size: contain;
`;
