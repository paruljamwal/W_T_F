import { FAILDATA, GYM_DETAILS, LOADDATA, SHOWDATA } from "./actionType"
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


const getDetails=(payload)=>{
    return{
        type:GYM_DETAILS,
        payload
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



// GYM DETAILS....

export const gymDetails=(gymId)=>(dispatch)=>{
    const res=axios(`https://api.wtfup.me/gym/plan`,{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        data:{'gym_id':gymId}
    })
    .then((r)=>localStorage.setItem("gym_id",(gymId)))
    
}

