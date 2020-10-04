import React from "react";
import Header from "../Layout/Header";
import Volunteer from "../templateParts/Volunteer";

const Home = () => {
  return (
    <div className="auth-bg">
      {/* <!--  Header --!> */}
      <Header> </Header>
      {/* <!--  Volunteer --!> */}
      <Volunteer> </Volunteer>
    </div>
  );
};

export default Home;
