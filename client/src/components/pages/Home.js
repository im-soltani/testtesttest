import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom"; 
import { useSelector,useDispatch} from "react-redux"
import ListCard from "./ListCard";
import {getProfiles} from "../../js/action/profileactions";

const Home = () => {
  const profiles = useSelector((state) => state.profileReducer.profiles);
  const [specialitySearch, setSpecialitySearch] = useState('');
  const [profileName, setProfileNameSearch] = useState("");
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(getProfiles());
   },[])
    return (
        <div className="landing hj">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Trouver un artisan</h1>
                <p className="lead">
                  {" "}
                  chercher un artisan , partager une annonce ,donner un rating ...
                </p>
                <hr />
                <div className="s01">
        <form>
          <div className="inner-form col-md-12 text-center">
            <div className="input-field first-wrap">
              <input id="search" type="text" placeholder="category" onChange={(e) => setSpecialitySearch(e.target.value)} />
            </div>
            <div className="input-field second-wrap">
              <input id="location" type="text" placeholder="code postal" onChange={(e) => setProfileNameSearch(e.target.value)}/>
            </div>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button">Search</button>
            </div>
          </div>
        </form>
      </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        {(specialitySearch && profileName)?
        (<div className='listeprofile'>
         {  profiles.filter(
          val =>
          (val.speciality.toLowerCase().includes(specialitySearch.toLowerCase().trim()))&&
          (val.profileName.toLowerCase().includes(profileName.toLowerCase().trim()))
          ).map((val)=>
            <ListCard val={val}/>
           )
         }
        </div>
        ):<div></div>}
        </div>
     </div>
    )
}
export default Home
