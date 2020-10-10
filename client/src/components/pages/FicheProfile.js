import React,{useEffect} from "react";
import PropTypes from "prop-types";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {detailsProduct} from "../../js/action/profileactions";

function FicheProfile(profile) {
    
   const profiles = useSelector((state) => state.profileReducer.profile);
   const dispatch = useDispatch(profile);

  
   // useEffect(() => {dispatch(detailsProduct(profile.match.params.id))})
    //useEffect(() => {
       // detailsProduct(match.params.id);
     // }, [detailsProduct, match.params.id]);
     
  
     const getProfile = () =>dispatch (detailsProduct(profile.match.params.id));
       
     useEffect(() =>{(getProfile()) },[]);
     const getProfiles = () =>dispatch (detailsProduct());
       
     useEffect(() =>{(getProfiles()) },[]);

    return (
        <div >
  
        <h1 >{profiles && profiles.speciality}</h1>
        <h1 >{profiles && profiles.adress}</h1>
        <h1 >{profiles && profiles.Rating}</h1>
        <h1 >{profiles && profiles.codePostal}</h1>
       </div>
    )
    }
     

export default FicheProfile
