import React from "react";
import PropTypes from 'prop-types'; 

const PrimeraApp = ( {objet,a} ) => {
   
    
    return ( 
        <>
            <h1> { objet } </h1> 
            <p> {a} </p> 
        </>
    );
};

PrimeraApp.propTypes = {
    objet: PropTypes.string.isRequired,
    a: PropTypes.number.isRequired
}
PrimeraApp.defaultProps = {
    a: 23
}

export default PrimeraApp;