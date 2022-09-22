import './index.css';
import './Appstyle.js';
import NavBar from './Components/NavBar.jsx';
import loaders from './Assests/loader.gif'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Plan from './Pages/Plan';
import Landing from './Pages/Landing';

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
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>}  />
        <Route path='/gym_details' element={<Plan/>} />
      </Routes>

    </div>
    }
    </>
  );
}

export default App;
