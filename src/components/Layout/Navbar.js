import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/Group 1329.png";
import { signOutHandler } from "../Auth/LoginManager.js";
// import volunteerData from "../../volunteerData"

const Navbar = () => {
    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //** FakeData Send in Database */
    // const allDataLoadHandler = () => {
    //   fetch("https://whispering-crag-01019.herokuapp.com/addVolunteer", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(volunteerData),
    //   });
    // };

    //** Google Sign Out Handler */
    const googleSignOut = () => {
        signOutHandler().then((res) => {
            setLoggedInUser(res);
        });
    };

    return ( <
        div className = "theme-navbar container" >
        <
        div className = "row" >
        <
        div className = "col-md-3" > { /* <!--  Header Logo --!> */ } <
        div className = "header-logo" >
        <
        Link to = "/" >
        <
        img src = { logo }
        alt = "" / >
        <
        /Link> <
        /div> <
        /div> <
        div className = "col-md-9" > { /* <!--  Header Menu --!> */ } <
        div className = "menu d-flex justify-content-end" >
        <
        ul >
        <
        Link to = "/" > Home < /Link> <
        Link to = "/donation" > Donation < /Link> <
        Link to = "/events" > Events < /Link> <
        Link to = "/blog" > Blog < /Link>

        <
        Link to = "/register" >
        <
        button className = "btn btn-primary" > Register < /button> <
        /Link>

        {
            loggedInUser.email ? ( <
                Link > { " " } <
                button onClick = { googleSignOut }
                className = "btn btn-danger" > { " " }
                Logout { " " } <
                /button>{" "} <
                /Link>
            ) : ( <
                Link to = "/allUser" >
                <
                button className = "btn btn-dark" > Admin < /button> <
                /Link>
            )
        }

        {
            loggedInUser.email ? ( <
                h6 style = {
                    { fontWeight: "700" } } > { loggedInUser.fastName } < /h6>
            ) : ( <
                Link to = "/login" >
                <
                button className = "section-btn" > Login < /button>{" "} <
                /Link>
            )
        } <
        /ul> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default Navbar;