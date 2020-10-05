import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/Group 1329.png";
import userLogo from "../../images/logos/users-alt 1.png";
import addLogo from "../../images/logos/plus 1.png";
import SingleUser from "./SingleUser";

const AllUser = () => {
    const [userInfo, setUserInfo] = useState([]);

    //** Data Come Form Server */
    useEffect(() => {
        fetch("https://whispering-crag-01019.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [userInfo]);

    const sdd = (id) => {
        const sss = userInfo.filter((dsd) => dsd._id != id);
        setUserInfo(sss);
    };

    return ( <
        div className = "admin" >
        <
        div className = "container-fluid" >
        <
        div className = "row" >
        <
        div className = "col-md-3" >
        <
        div className = "sidebar" > { /* <!--  Sidebar Logo --!> */ } <
        Link to = "/" >
        <
        div className = "sidebar-img" >
        <
        img src = { logo }
        alt = "" / >
        <
        /div> <
        /Link> { /* <!--  Sidebar Route --!> */ } <
        div className = "sidebar-route" >
        <
        Link to = "allUser" >
        <
        button >
        <
        img src = { userLogo }
        alt = "" / > Volunteer register list <
        /button> <
        /Link> <
        Link to = "addEvent" >
        <
        button >
        <
        img src = { addLogo }
        alt = "" / > Add Event <
        /button> <
        /Link> <
        /div> <
        /div> <
        /div> <
        div className = "col-md-9" >
        <
        div className = "admin-content" >
        <
        h3 className = "admin-page-title" > Volunteer register list < /h3>

        <
        div className = "admin-content auth-bg" >
        <
        div className = "all-user-box" >
        <
        div className = "user-table" >
        <
        table class = "table" > { /* <!--  Table Header --!> */ } <
        thead >
        <
        tr >
        <
        th scope = "col" > Name < /th> <
        th scope = "col" > Email ID < /th> <
        th scope = "col" > Registration date < /th> <
        th scope = "col" > Volunteer list < /th> <
        th scope = "col" > Action < /th> <
        /tr> <
        /thead>

        { /* <!--  Table Data --!> */ } {
            userInfo.map((userIn) => ( <
                SingleUser key = { userIn.key }
                userIn = { userIn }
                sdd = { sdd } >
                < /SingleUser>
            ))
        } <
        /table> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default AllUser;