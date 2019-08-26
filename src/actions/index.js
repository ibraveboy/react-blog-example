// export const searchResultsUpdate=(results)=>{
//     return{
//         type:"SEARCH_RESULTS_UPDATE",
//         payload:results
//     }
// }

import axios from "axios";

// https://jsonplaceholder.typicode.com/users
export const increaseValue = () => {
  return {
    type: "ADD"
  };
};

export const decreaseValue = () => {
  return {
    type: "SUB",
    payload: [1, 2, 3, 4]
  };
};

export const getUsers = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    dispatch({
      type: "GET_USER",
      payload: res.data
    });
  });
};
