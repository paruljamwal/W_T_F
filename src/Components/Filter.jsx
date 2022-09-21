import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData } from "../Redux/Search/action";

const Filter = () => {
  const gyms = useSelector((store) => store.gym.gymData);
  const [city, setCity] = useState([]);
  const dispatch = useDispatch();
  const [gym, setgym] = useState("");
  const [near, setNear] = useState([]);
  const [loc, setLoc] = useState("");
  function findCity() {
    const res = axios(`https://api.wtfup.me/gym/places`).then((r) =>
      setCity(r.data.data)
    );
  }

  const handelCity = (e) => {
    findCity();

    setgym(e.target.value);
    // nearest(gym);
    let da =
      city &&
      city.filter((e) => {
        if (e.city == gym) {
          setNear(e.addressComponent);
          dispatch(getData(near));
        }
      });

    // dispatch(getData(da));
  };

  function nearest(gymy) {
    if (gymy == "Noida") {
      setLoc("noida");
    }

    const nearLocation = axios(
      `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&amp&long=78.0042384802231&city=${loc}`
    ).then((r) => setNear(r.data.data));
  }

  function handelLocation(e) {
    let payload = {
      ...e,
      cover_image:
        "https://c4.wallpaperflare.com/wallpaper/489/788/56/workout-fitness-gym-personal-trainer-wallpaper-preview.jpg",
    };
    dispatch(getData([payload]));
  }

  let d = city.map((e) => e.addressComponent);

  useEffect(() => {}, [gym, dispatch]);

  return (
    <FilterBox>
      <Box>
        <Text>Filters</Text> <Resetbtn>Reset</Resetbtn>
      </Box>
      <SmallText>Location</SmallText>
      <Box1>
        <LocationInput>
          <Logo>
            <BsSearch />
          </Logo>
          <LocInput placeholder="Enter Location" />
        </LocationInput>
        <SmallText1>Price</SmallText1>
        <Min placeholder="Min"></Min>
        <Max placeholder="Max"></Max>
      </Box1>
      <SmallText>Cities</SmallText>
      <Selecter onChange={handelCity}>
        <Option value="">Select City</Option>
        <Option value="New Delhi">New Delhi</Option>
        <Option value="Ghaziabad">Ghaziabad</Option>
        <Option value="Noida">Noida</Option>
        <Option value="Delhi">Delhi</Option>
      </Selecter>

      {city.length ? (
        <Location>
          {near &&
            near.map((e) => (
              <P onClick={() => handelLocation(e)}>
                {e.address1} | {e.address2}
              </P>
            ))}
        </Location>
      ) : (
        ""
      )}
    </FilterBox>
  );
};

export default Filter;

const FilterBox = styled.div`
  border: 1px solid transparent;
  color: white;
  width: 30%;
  height: 600px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    margin: auto;
    height: 370px;
  }
`;

const Box = styled.div`
  display: flex;
`;

const P = styled.p`
  padding-left: 10px;
  color: rgb(112, 112, 112);
  font-size: larger;
`;

const Location = styled.div`
  border: 2px solid rgb(112, 112, 112);
  background-color: rgb(46, 46, 46);
  width: 269px;
  cursor: pointer;
  margin: 10px;
  border-radius: 4px;
  z-index: 99999999999;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 360px;
  }
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: row;
  }
`;

const Text = styled.p`
  font-size: 3rem;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    font-size: large;
  }
`;

const SmallText = styled.p`
  font-size: large;
  margin-left: 10px;
`;

const SmallText1 = styled.p`
  font-size: large;
  margin-left: 10px;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: large;
  padding: 12px;
  color: rgb(112, 112, 112);

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: small;
  }
`;

const Resetbtn = styled.button`
  margin: 67px 20px;
  background-color: rgb(146, 9, 9);
  color: white;
  width: 100px;
  cursor: pointer;
  height: 35px;
  font-size: larger;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const LocationInput = styled.div`
  border: 2px solid rgb(112, 112, 112);
  background-color: rgb(46, 46, 46);
  width: 270px;
  height: 50px;
  margin: 10px;
  display: flex;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 170px;
    margin: 10px;
  }
`;

const LocInput = styled.input`
  background-color: rgb(46, 46, 46);
  border: none;
  outline: none;
  font-size: large;

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 120px;
  }
`;

const Min = styled.input`
  background-color: rgb(46, 46, 46);
  width: 60px;
  height: 50px;
  margin: 10px;
  font-size: larger;
  padding-left: 10px;
  border: 2px solid rgb(112, 112, 112);
  outline: none;
  border-radius: 5px;
`;

const Max = styled.input`
  background-color: rgb(46, 46, 46);
  width: 60px;
  font-size: larger;
  padding-left: 10px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  border: 2px solid rgb(112, 112, 112);
  outline: none;
`;

const Selecter = styled.select`
  background-color: rgb(46, 46, 46);
  width: 270px;
  height: 50px;
  font-size: larger;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 2px solid rgb(112, 112, 112);
  color: rgb(112, 112, 112);

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 360px;
  }
`;

const Option = styled.option`
  background-color: rgb(46, 46, 46);
  width: 270px;
  color: rgb(112, 112, 112);
  height: 50px;
  font-size: large;
  padding-bottom: 20px;
  cursor: pointer;
  margin: 20px;
  border-radius: 5px;
  border: 2px solid rgb(112, 112, 112);

  &:hover {
    background-color: #2e2e2e86;
  }

  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width: 200px;
    font-size: small;
    padding-bottom: 2px;
  }
`;
