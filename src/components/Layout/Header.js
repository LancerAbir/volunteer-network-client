import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header header-bg">
      <div className="header-container">
        {/* <!--  Navbar --!> */}
        <Navbar> </Navbar>

        {/* <!--  Header Search --!> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-search-box text-center">
                <h1>I grow by helping people in need.</h1>
                <input type="text" placeholder="Search...." />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
