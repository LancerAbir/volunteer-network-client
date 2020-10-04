import React from "react";
import logo from "../../images/logos/Group 1329.png";
import userLogo from "../../images/logos/users-alt 1.png";
import addLogo from "../../images/logos/plus 1.png";
import uploadIcon from "../../images/logos/cloud-upload-outline 1.png";
import { Link } from "react-router-dom";

const AddEvent = () => {
  return (
    <div className="admin">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">  
            <div className="sidebar">
              {/* <!--  Sidebar Logo --!> */}
              <Link to="/">
                <div className="sidebar-img">
                  <img src={logo} alt="" />
                </div>
              </Link>
              {/* <!--  Sidebar Route --!> */}
              <div className="sidebar-route">
                <Link to="allUser">
                  <button>
                    <img src={userLogo} alt="" /> Volunteer register list
                  </button>
                </Link>
                <Link to="addEvent">
                  <button>
                    <img src={addLogo} alt="" /> Add Event
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="admin-content">
            <h3 className="admin-page-title">Add Event</h3>

            <div className="admin-content auth-bg">
              <div className="all-user-box">
                <div className="user-table">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Event Title</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputEmail4"
                          placeholder="Enter Title"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Event Date</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
      
                    <div className="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputAddress">Description</label>
                        <textarea
                          type="textarea"
                          class="form-control"
                          id="inputAddress"
                          placeholder="Enter Designation"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputAddress">Banner</label>
      
                        <p className="upload-icon">
                          <img src={uploadIcon} alt="" />
                          Upload image
                        </p>
      
                        <form action="/action_page.php">
                          <input type="file" id="myFile" name="filename" />
                        </form>
                      </div>
                    </div>
                  </form>
                </div>
                <button type="submit" class="btn btn-primary mr-auto">
                  Submit
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
