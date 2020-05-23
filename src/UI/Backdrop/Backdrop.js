import React from 'react';
import './Backdrop.css';

const backDrop = (props) =>(
    props.show ? <div className='Backdrop' onClick={props.clicked}></div>:null
)

export default backDrop;