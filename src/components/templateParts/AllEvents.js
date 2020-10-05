import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import SingleEvent from "./SingleEvent";

const AllEvents = () => {

    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [allEvent, setAllEvent] = useState([])
    //** Data Come Form Server */
    useEffect(() => {
      fetch('http://localhost:6600/events?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data => setAllEvent(data))
    }, [])


  return (
    <div className="auth-bg events-group">
      <div className="container">
        <div className="row">
          {
            allEvent.map((event, index) => <div className="col-md-6"> <SingleEvent key={index._id} event={event}></SingleEvent> </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
