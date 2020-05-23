import React from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import './SuperheroList.css';

const superheroList = (props) => {
    const superheroItems = props.superheroData.map(superhero =>{ 
        if(superhero === null){
            return <Spinner />
        }
        return (        
        <div className= "SuperheroList" key={superhero.id}>
            <img src={superhero.image.url} onClick = {(e) => props.cardClick(e)} id={superhero.id} alt={`superheroImage-${superhero.id}`}></img>
            <h2>{superhero.name}</h2>
        </div>
    )});


    return (
        <React.Fragment>
            {superheroItems}
        </React.Fragment>
)}

export default superheroList;