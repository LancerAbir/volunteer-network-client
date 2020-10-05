import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/Group 1329.png";

//** Import Date Picker  */
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";




const Register = () => {

  //** Date Picker */
  const [selectedDate, setSelectedDate] = useState({
    setThisDate: new Date(),
  });
  const handleDateChange = (date) => {
    const updateDates = { ...selectedDate };
    updateDates.setThisDate = date;
    setSelectedDate(updateDates);
  };


  //** Data Come Form Server */
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6600/volunteers")
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, []);


  //** Dynamic Key Single Place */
  const [register, setRegister] = useState({});
  const { SingleVolKey } = useParams();
  useEffect(() => {
    if (singleData.length > 0) {
      const card = singleData.find((sinPl) => sinPl.key === SingleVolKey);
      setRegister(card);
    }
  }, [singleData]);


  //** Data Come Form Context API */
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  //** Logged User Info */
  const loggedName = loggedInUser.email && loggedInUser.fastName;
  const loggedEmail = loggedInUser.email && loggedInUser.email;


  //** Description Value */
  const [description, setDescription] = useState("descriptionId");
  

  //** loggedUser Data Send in Database */
  const desValueHandler = () => {
    const desValue = document.getElementById("description").value;
    const total = {desValue}
    const newEvent = { ...loggedInUser, ...selectedDate, total, ...register };

    //** Data Send For User Database */
    fetch("http://localhost:6600/addEvents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });


    //** Data Send For Admin Database */
    fetch("http://localhost:6600/allUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  };

  

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
                  {/* <!--  Date Picker --!> */}
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        format="dd/MM/yyyy"
                        value={selectedDate.setThisDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Description"
                    name="description"
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
                  <button
                    onClick={desValueHandler}
                    className="btn btn-primary text-center"
                    type="submit"
                  >
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
