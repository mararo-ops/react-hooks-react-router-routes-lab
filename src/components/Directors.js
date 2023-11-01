import React from "react";
import { directors } from "../data";


const directorsDetails=directors.map((director)=>{
  return (
    <div key={director.name}>
      <p>{director.name}</p>
      <ul>
        <li>{director.movies}</li>
      </ul>
    </div>
  )

})
    function Directors() {
      return(
          <div>
            <h1>Directors Page</h1>
            {directorsDetails}
            </div>
        )
    }

export default Directors;