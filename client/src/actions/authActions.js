import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";


// Register User
export const RegisterUser = (userData, history) => dispatch => {
 const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  }
  axios
    .post("/api/users/register", userData, { headers: headers })
    .then(res => {
      // alert(JSON.stringify(res.data));
      if (res.data.status === 1) {
        history.push("/signin")
      } else if (res.data.status === 0) {
        toast(res.data.msg);
      }
      else if (res.data.status === -1) {
        toast(res.data.msg);
      }
      else {
        toast(res.data.msg);
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  }
  axios
    .post("/api/users/signin", userData, { headers: headers })
    .then(res => {

      // Save to localStorage
      if (res.data.status === 0) {
        toast(res.data.msg);
      }
      else if (res.data.status === -1) {
        toast(res.data.msg);
      }
      else if (res.data.status === 3) {
        toast(res.data.msg);
      }
      else {
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        //console.log(decoded);
        dispatch(setCurrentUser(decoded));

      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
