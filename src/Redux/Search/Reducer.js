import { FAILDATA, LOADDATA, SHOWDATA } from "./actionType"


const init={
    isLoading:false,
    isError:false,
    gymData:[]
}

 const GymReducer=(store=init,{type,payload})=>{
//    console.log(type,payload);
    switch (type) {
    case LOADDATA:
    return{
        ...store,
        isLoading:true,
        isError:false

    }

    case SHOWDATA:
        return{
         ...store,
         isLoading:false,
         isError:false,
         gymData:payload    
        } 

        case FAILDATA:
            return{
         ...store,
         isLoading:false,
         isError:true
            }


    default:
        return{
            store
        }
   }
}


export default GymReducer