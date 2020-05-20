import React from 'react';

import './SuperheroList.css';

const superheroList = (props) => {
    const superheroItems = props.superheroData.map(superhero => (
        <div className= "SuperheroList" key={superhero.id}>
            <img src={superhero.image.url} alt={`superheroImage-${superhero.id}`}></img>
            <h2>{superhero.name}</h2>
            <p>{superhero.id}</p>
        </div>
    ));
    return (
        <React.Fragment>
            {superheroItems}
        </React.Fragment>
)}

export default superheroList;