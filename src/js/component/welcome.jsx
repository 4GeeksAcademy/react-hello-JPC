import React from "react";

//include images into your bundle
import PropTypes from "prop-types";

const welcome = (props) => {
    return(
        <div className="container">
            <div className="card-body" id="jumbotron">
                <h5 className="card-title" style={{ fontSize:'80px' }}>{props.title}</h5>
                <p className="card-text">{props.parraf}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
};

welcome.prototype = {
    title: PropTypes.string,
    parraf: PropTypes.string,
    button: PropTypes.string,
}


export default welcome;