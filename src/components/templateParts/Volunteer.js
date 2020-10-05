import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleVolunteer from "./SingleVolunteer";

const Volunteer = () => {

  //** UseSate Load All Data */
  const [allVolunteerData, setAllVolunteerData] = useState([]);

  // const currentID = allVolunteerData.map( kk => kk._id)
  // console.log(currentID);


  //** Data Come Form Server */
  useEffect(() => {
    fetch('http://localhost:6600/volunteers')
    .then(res => res.json())
    .then(data => setAllVolunteerData(data))
  }, [])


  return (
    <div className="volunteer container">
      <div className="row">
        {
          allVolunteerData.map((volunteer, index) =>  <div className="col-md-3"> <Link to={"/register/" + volunteer._id}> <SingleVolunteer key={index.key} title={volunteer.title} volunteer={volunteer}></SingleVolunteer> </Link> </div>)
        }
      </div>
    </div>
  );
};

export default Volunteer;
