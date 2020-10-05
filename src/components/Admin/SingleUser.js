import React from "react";
import deleteIcon from "../../images/logos/trash-2 9.png";

const SingleUser = (props) => {
    const { fastName, email, setThisDate, title, _id } = props.userIn;

    //** Delete Data Form Database */
    const userDeleteHandler = (id) => {
        console.log(id);
        fetch(`https://whispering-crag-01019.herokuapp.com/userdelete/${id}`, {
                method: "DELETE",
            })
            .then((res) => res.json())
            .then((result) => {
                console.log("Delete Successfully", result);
            });
    };

    return ( <
        tbody >
        <
        tr >
        <
        td > { fastName } < /td> <
        td > { email } < /td> <
        td > { new Date(setThisDate).toDateString("dd/MM/yyyy") } < /td> <
        td > { title } < /td> <
        td >
        <
        button onClick = {
            () => userDeleteHandler(_id) }
        type = "submit" >
        <
        img src = { deleteIcon }
        alt = "" / >
        <
        /button> <
        /td> <
        /tr> <
        /tbody>
    );
};

export default SingleUser;