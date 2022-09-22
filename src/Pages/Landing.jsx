import React from "react";
import styled from "styled-components";
import DataShow from "../Components/DataShow";
import Experience from "../Components/Experience.jsx";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer.jsx";
import Poster from "../Components/Poster.jsx";
import Gyms from "./Gyms";
const Landing = () => {
  return (
    <>
      <Poster />
      <Gyms />
      <ShowBox>
        <Filter />
        <DataShow />
      </ShowBox>
      <Experience />
      <Footer />
    </>
  );
};

export default Landing;

const ShowBox = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;
