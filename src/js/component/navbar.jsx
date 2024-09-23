import React from "react";

//include images into your bundle
import PropTypes, { array } from "prop-types";

const Navbar = (props) => {
	return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-center" id="allNav">
        <div className="container-nav">
            <a className="navbar-brand" id="brand" href="#">{props.startboostrap}</a>
            <button className="navbar-toggler btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pt-3 pt-lg-0" id="navbarNav">
            <ul className="navbar-nav">
            { props.items.map((item, index) => {
               return <li key={index} className="nav-item"><a className={`nav-link ${index===0?"text-white":"text-secondary"}`}  id={index} href="#">{item}</a></li>
            })}
            </ul>
            </div>
        </div>
        </div>
        </nav>
    );
};

Navbar.prototype = {
    startboostrap: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
}


export default Navbar;