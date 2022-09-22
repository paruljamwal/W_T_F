import './index.css';
import './Appstyle.js';
import { ShowBox } from './Appstyle.js';
import DataShow from './Components/DataShow';
import Experience from './Components/Experience.jsx';
import Filter from './Components/Filter';
import Footer from './Components/Footer.jsx';
import NavBar from './Components/NavBar.jsx';
import Poster from './Components/Poster';
import Gyms from './Pages/Gyms';
import loaders from './Assests/loader.gif'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Plan from './Pages/Plan';

function App() {
 let [loader,setLoader]=useState(false);
 useEffect(()=>{
  setLoader(true);
  setTimeout(() => {
    setLoader(false);
 }, 4000);
 },[])
 
  return (

    <>
    {
      loader ? 

         <img className='load' src={loaders} />
      :

    <div className="App">
      {/* <NavBar/>
      <Poster/>
     <Gyms/>
        <ShowBox>
      <Filter/>
      <DataShow/>   
       </ShowBox>
       <Experience/>
       <Footer/>  */}
       <Plan/> 
    
    </div>
    }
    </>
  );
}

export default App;
