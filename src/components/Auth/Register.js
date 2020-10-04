import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/Group 1329.png";

//** Import Date Picker  */
import DatePicker from 'react-date-picker';


const Register = () => {

  //** Date Picker */
  const [value, onChange] = useState(new Date());
  console.log(value);


  const [singleData, setSingleData] = useState([])
   //** Data Come Form Server */
   useEffect(() => {
    fetch('http://localhost:6600/volunteers')
    .then(res => res.json())
    .then(data => setSingleData(data))
  }, [])  


  const [register, setRegister] = useState({})  
 //** Dynamic Key Single Place */
  const { SingleVolKey } = useParams()
  useEffect(() => {
    if (singleData.length > 0) {
      const card = singleData.find(sinPl => sinPl.key === SingleVolKey)
      setRegister(card)
    }
  }, [singleData])
  

  //** Data Come Form Context API */
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //** Logged User Info */
  const loggedName = loggedInUser.email && loggedInUser.fastName
  const loggedEmail = loggedInUser.email && loggedInUser.email



  return (
    <div className="auth-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">

            {/* <!--  Root Logo --!> */}
            <div className="root-logo text-center">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>


            {/* <!--  Register Form --!> */}
            <div className="register-box">
              <h2> Register as a Volunteer </h2>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Full Name"
                    value={loggedName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Username or Email"
                    value={loggedEmail}
                  />
                </div>
                <div className="form-group date-picker">
                  <DatePicker
                    onChange={onChange}
                    value={value}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Description"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Organize books at the library."
                    value={register.title}
                  />
                </div>
                <Link to="/events">
                  <button className="btn btn-primary text-center" type="submit">
                    Registration
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
