import React from 'react';
import deleteIcon from "../../images/logos/trash-2 9.png";




const SingleUser = (props) => {

    const {fastName, email, setThisDate, title} = props.userIn 


    return (
       
        <tbody>
        <tr>
            <td>{fastName}</td>
            <td>{email}</td>
            <td>{(new Date(setThisDate).toDateString('dd/MM/yyyy'))}</td>
            <td>{title}</td>
            <td>
            <button type="submit">
                <img src={deleteIcon} alt="" />
            </button>
            </td>
        </tr>
        </tbody>
    );
};

export default SingleUser;