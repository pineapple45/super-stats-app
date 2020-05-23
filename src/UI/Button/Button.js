import React from 'react';
import './Button.css';

const button = (props) => {
    let loadingClass = "";
    let loadingText = "Click roller to load new data..";
    if(props.loading){
       loadingClass = 'loading';
       loadingText = "loading new data...";
    }
    return(

    <div onClick={props.clicked} className="container">
        <div className= {`outer-wrapper ${loadingClass}`}>
        <div className=" inner-wrapper">
            <h2></h2>
        </div>
        </div>
        <span className="Text">{loadingText}</span> 
    </div>

)}

export default button;