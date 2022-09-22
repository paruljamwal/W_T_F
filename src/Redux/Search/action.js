import {
  FAILDATA,
  LOADDATA,
  SHOWDATA,
} from "./actionType";
import axios from "axios";

export const getData = (payload) => {
  // console.log(payload,"p");
  return {
    type: SHOWDATA,
    payload,
  };
};

const userfail = (e) => {
  return {
    type: FAILDATA,
  };
};

const userLoad = () => {
  return {
    type: LOADDATA,
  };
};



export const FetchData = (payload) => (dispatch) => {
  dispatch(userLoad());
  return axios(`https://wtfgym.herokuapp.com/data`)
    .then((r) => dispatch(getData(r.data)))
    .catch((e) => dispatch(userfail(e)));
};

// FetchData()

export const nearestGym = (gym_name) => (dispatch) => {
  return axios(`https://devapi.wtfup.me/gym/nearestgym?lat=28.5966034&long=77.3286464`)
    .then((r) => dispatch(getData(r.data.data)))
    .catch((e) => dispatch(userfail(e)));
};

// GYM DETAILS....

export const gymDetails = (gymId) => (dispatch) => {
  dispatch(userLoad());
  return axios
    .post(`https://api.wtfup.me/gym/plan`, {
      gym_id: gymId,
    })
    .then((r) => localStorage.setItem("gym_id", gymId))
    .then((r) => dispatch(getData(r.data.data)))
    .catch((e) => dispatch(userfail()));
};
