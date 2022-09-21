import React from "react";
import {
  AboutBox,
  Button,
  FitnesBox,
  GymBox,
  LeftBox,
  LoginBox,
  LogoBox,
  LogoImg,
  MainNavBox,
  NutritionBox,
  PartnerBox,
  RightBox,
} from "./NavBarstyle";
import logo from '../Assests/logo.png'
const NavBar = () => {
  return (
    <MainNavBox>
      <LeftBox>
        <LogoBox>
          <LogoImg src={logo} alt="" /> </LogoBox>
      </LeftBox>
      <RightBox>
        <FitnesBox>Fitness</FitnesBox>
        <NutritionBox>Nutrition</NutritionBox>
        <GymBox>Gyms</GymBox>
        <PartnerBox>Partner</PartnerBox>
        <AboutBox>About</AboutBox>
        <LoginBox>
          <Button>Login</Button>
        </LoginBox>
      </RightBox>
    </MainNavBox>
  );
};

export default NavBar;
