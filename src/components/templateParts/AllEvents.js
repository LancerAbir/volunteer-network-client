import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import SingleEvent from "./SingleEvent";

const AllEvents = () => {

    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    
    //** Data Come Form Server */
    const [allEvent, setAllEvent] = useState([])
    useEffect(() => {
      fetch('http://localhost:6600/events?email='+loggedInUser.email, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(data => setAllEvent(data))
    }, [allEvent])




  return (
    <div className="auth-bg events-group">
      <div className="container">
        <div className="row">
          {
            allEvent.map((event, index) => <div className="col-md-6"> <SingleEvent key={index.key} event={event}></SingleEvent> </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
