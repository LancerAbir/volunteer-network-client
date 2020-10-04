import React from "react";




const SingleVolunteer = (props) => {

  //** Distructure Data */
  const { img, title } = props.volunteer;

  return (
    
        <div className="volunteer-card">
          {/* <!--  Volunteer Image --!> */}
          <img src={img} alt="" />
          {/* <!--  Volunteer Title --!> */}
          <div className="volunteer-title d-flex">
            <h5 className="align-items-center"> {title} </h5>
          </div>
        </div>
    
  );
};

export default SingleVolunteer;
