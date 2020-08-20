import React from 'react';
import './Button.css';

const button = (props) => {
    let loadingText = " to load new data..";
    if(props.loading){
       loadingText = "loading new data...";
    }
    return(
        
    <div onClick={props.clicked} className="container">
        
       <img src='https://kapownoodlebar.com/wp-content/uploads/2017/05/kapow-logo.png'alt='pic'/>
          
        
        
        <span className="Text">{loadingText}</span> 
        
    </div>

)}

export default button;