import React from "react";
import Navbar from "../Layout/Navbar";
import AllEvents from "../templateParts/AllEvents";

const Events = () => {
  return (
    <div className="auth-bg">
      {/* <!--  Navbar --!> */}
      <Navbar> </Navbar>
      {/* <!--  All Events --!> */}
      <AllEvents></AllEvents>
    </div>
  );
};

export default Events;
