import axios from "axios";
import {
      GET_CURRENT_PROFILE,
      GET_PROFILES,
      SET_LOADING,
      GET_ERRORS,
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL 
      
  } from "../const/actionType";


  //add current profile
  export const createcurrprofile = (newprofile) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addprofile", newprofile,options);
     dispatch(getcurrentprofile());
    } catch (error) {
      console.log(error)
    

    }
  };

    //get current profile
    export const getcurrentprofile = () => async (dispatch) => {
        dispatch(setLoading());
        try {
          const options = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
      
          const res = await axios.get("/api/auth/currentprofile",options);
         dispatch({
            type: GET_CURRENT_PROFILE,
            payload: res.data, 
          });
        } catch (error) {
        console.log(error)
        }
      };
//
  //delete current profile
// Clear profile
export const clearCurrentProfile = (id) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.delete(`/api/auth/deleteartisan/${id}`,options);
      dispatch(getcurrentprofile());
    } catch (error) {
    console.log(error)
    }
  };
        //edit curr profile
        export const editcurrprofile=(id,updatecurrprofile)=>dispatch=>{
            dispatch(setLoading());
        try {
          const options = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
            const res =axios.put(`/api/auth/editprofile/${id}`,updatecurrprofile,options)
            dispatch(getcurrentprofile());
          } catch (error) {
           console.log(error)
          
      
          }
          };
    
          const setLoading = () => (dispatch) => {
            dispatch({
              type: SET_LOADING,
            });
          };
  //get all profile
          export const getProfiles = () =>async(dispatch)=> {
            //dispatch(setProfileLoading());
            try {
            const res = await axios.get("/api/auth/allprofile")
            dispatch({
              type: GET_PROFILES,
              payload: res.data, 
            });
          }catch (error) {
            dispatch({
              type: GET_ERRORS,
            });
           };
           };
   
//get profile by id
//`/api/auth/${id}`
export const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId});
    const res = await axios.get('/api/auth/' + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
//`/api/auth/${id}`
