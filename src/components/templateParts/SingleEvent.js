import React from 'react';

const SingleEvent = (props) => {

    const { img, title, setThisDate} = props.event

    return (
        <div className="events d-flex">
            <div className="events-img">
                <img
                    src={img}
                    alt={title}
                />
                </div>
                <div className="events-des mr-auto">
                    <h2>{title}</h2>
                    <h3>{(new Date(setThisDate).toDateString('dd/MM/yyyy'))}</h3>
                <button className="btn btn-danger">Cancel</button>
            </div>
        </div>
    );
};

export default SingleEvent;