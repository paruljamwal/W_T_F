import { FAILDATA, LOADDATA, SHOWDATA } from "./actionType"
import axios from 'axios';

 export const getData=(payload)=>{
    // console.log(payload,"p");
    return{
        type:SHOWDATA,
        payload
    }
}



const userfail=(e)=>{
 return{
    type:FAILDATA,

 }
}


const userLoad=()=>{
    return{
        type:LOADDATA
    }
}



export const FetchData=(payload)=>(dispatch)=>{
    dispatch(userLoad()); 
    //https://api.wtfup.me/gym/places
    //https://wtfgym.herokuapp.com/data
    return axios(`https://wtfgym.herokuapp.com/data`)
    .then((r)=>dispatch(getData(r.data)))
    .catch((e)=>dispatch(userfail(e)))
}

// FetchData()

export const nearestGym=(payload)=>(dispatch)=>{
   return axios(`https://api.wtfup.me/gym/places`)
   .then((r)=>dispatch(getData(r.data)))
   .then( axios(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&amp&long=78.0042384802231&city=${payload}`))
   .then((r)=>dispatch(getData(r.data)))
   .catch((e)=>dispatch(userfail(e)))
}


