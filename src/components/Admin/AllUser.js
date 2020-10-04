import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/Group 1329.png";
import userLogo from "../../images/logos/users-alt 1.png";
import addLogo from "../../images/logos/plus 1.png";
import deleteIcon from "../../images/logos/trash-2 9.png";

const AllUser = () => {
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
                <h3 className="admin-page-title">Volunteer register list</h3>

                <div className="admin-content auth-bg">
                <div className="all-user-box">
                    <div className="user-table">
                    <table class="table">
                        {/* <!--  Table Header --!> */}
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration date</th>
                            <th scope="col">Volunteer list</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
        
                        {/* <!--  Table Data --!> */}
                        <tbody>
                        <tr>
                            <td>Sufi Ahmed Hamim</td>
                            <td>sufi@gmail.com</td>
                            <td>22-10-2020</td>
                            <td>Organize books at the library.</td>
                            <td>
                            <button type="submit">
                                <img src={deleteIcon} alt="" />
                            </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sufi Ahmed Hamim</td>
                            <td>sufi@gmail.com</td>
                            <td>22-10-2020</td>
                            <td>Organize books at the library.</td>
                            <td>
                            <button type="submit">
                                <img src={deleteIcon} alt="" />
                            </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sufi Ahmed Hamim</td>
                            <td>sufi@gmail.com</td>
                            <td>22-10-2020</td>
                            <td>Organize books at the library.</td>
                            <td>
                            <button type="submit">
                                <img src={deleteIcon} alt="" />
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
