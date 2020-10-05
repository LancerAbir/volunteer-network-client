import React from "react";

const SingleEvent = (props) => {
  const { img, title, setThisDate, _id } = props.event;



  //** Delete Data Form Database */
  const eventDeleteHandler = (id) => {
    console.log();
    fetch(`http://localhost:6600/eventdelete/${id}`, {
      method: 'DELETE',
    })
        .then(res => res.json())
        .then(result => {
            console.log("Delete Successfully", result);
        });
  };

  return (
    <div className="events d-flex">
      <div className="events-img">
        <img src={img} alt={title} />
      </div>
      <div className="events-des mr-auto">
        <h2>{title}</h2>
        <h3>{new Date(setThisDate).toDateString("dd/MM/yyyy")}</h3>
        <button
          onClick={() => eventDeleteHandler(_id)}
          className="btn btn-danger"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SingleEvent;
