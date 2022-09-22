import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { BsSearch} from 'react-icons/bs';
import {IoLocationSharp} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {  FetchData, getData, nearestGym } from '../Redux/Search/action';

const Gyms = () => {
  let [search,setSearch]=useState('')
  let dispatch=useDispatch();
  let gymData=useSelector(store=>store.gym.gymData)

 
  const AutoFoucs=useRef(null);
  
  const handelSearch=(e)=>{
     setSearch(e.target.value);

    if(search.length ===  1 ){
      dispatch(FetchData());
    }
     let gym= gymData?.filter((e)=>e.gym_name?.toLowerCase().indexOf(search) !== -1 ? true : false)
     .map((e)=>e)
     dispatch(getData(gym));
   
   }


   const handelClear=()=>{
    setSearch("")
   }

  return (
    
    <InputBox>
        <Logo><BsSearch/></Logo>
        <Input value={search} onChange={handelSearch} ref={AutoFoucs}  placeholder='Search gym name here...' />
        <Location><IoLocationSharp/></Location>
        <Search onClick={handelClear} >Clear</Search>
    </InputBox>


  )
}


export default Gyms


const InputBox=styled.div` 
display: flex;
width: 80%;
margin:20px auto;
border: 2px solid white;
border-radius: 7px;
height: 54px;
@media only screen and (max-width: 768px) {
  
  }
  @media only screen and (max-width: 425px) {
  width: 89%;
  margin:20px;
  height: 35px;

  }
`;


const Logo=styled.div`
  color: white;
  width: 50px;
  margin: 15px 2px 5px 20px;
  @media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
  width: 12px;
  margin: 11px 5px 5px 10px;
}
`;


const Input=styled.input` 
width: 85%;
border: none;
outline: none;
height: 35px;
font-size:larger;
margin: 7px auto ;
background-color: black;
color: white;
@media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
width: 100%;
height: 20px;
font-size: smalle;
}
`;

const Location=styled.button`
  background-color: rgb(146,9,9);
  width: 50px;
  margin: 7px;
  border: none;
  color: white;
  width: 50px;
  font-size:x-large;
  border-radius: 6px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
width: 40px;
font-size: small;
}
`;


const Search=styled.button`
  background-color: rgb(146,9,9);
  margin: 7px;
  width: 100px;
  border: none;
  color: white;
  border-radius: 6px;
  font-weight: lighter !important;
  font-size: 18px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
  
}
@media only screen and (max-width: 425px) {
font-size: 15px;
}  

`;