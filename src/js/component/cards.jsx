import React from "react";

//include images into your bundle
import PropTypes from "prop-types";


const Cards = (props) => {
	return (
        <div className="container">
            <div className="row mt-3 d-flex justify-content-between">
            { props.properties.map((item, index) => {
               return (
                <div key={index} className="col-lg-3 col-md-4 col-sm-12 mb-3 d-flex justify-content-center">
                    <div  className="card" style={{ "width": "18rem" }}>
                        <img src={item.imagen} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href={item.buttonURL} className="btn btn-primary btn-card">{item.buttonlabel}</a>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    );
};

Cards.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.shape({  
        imagen: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        buttonURL: PropTypes.string,
        buttonlabel: PropTypes.string,
}
))
}

export default Cards;