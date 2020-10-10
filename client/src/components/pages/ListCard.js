import React from 'react'
import { Link } from "react-router-dom"
function ListCard({val:{speciality,profileName,_id}}) {
    return (
       <div className="card">
            <h1>{speciality}</h1>
            <h1>{profileName}</h1>
            
      <Link to={'/FicheProfile/'+_id}  className="btn btn-light" role="group" type="button"  >
      <button >Voir la fiche </button>
      </Link>
      
      </div>
    //{`/FicheProfile/${_id}`}
     

    )
}
export default ListCard
