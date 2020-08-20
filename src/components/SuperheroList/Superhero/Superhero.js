import React from 'react';
import './Superhero.css';

const superHero = (props) => {
    const gradArray = ['p-1','p-2','p-3','p-4','p-5','p-6']
    return(
    <div className="Superhero">
        <h1>{props.details.name}</h1>
         <img src={props.details.image.url} alt={props.details.name} /> 
        <h2>Powerstats</h2>
        <div className="quality">
            {Object.entries(props.details.powerstats).map((entry,i) => {
                if(entry[1] === 'null' || entry[1] === '-' || entry[1] === '') return <p>{entry[0]+' : [Data unavailable]'}</p>

                return <div key={i}>
                    <h3>{entry[0]}</h3>
                    <div className='stats-holder'>
                        <div className={`Powerstats ${gradArray[i]}`}  style={{width: `${entry[1]}%`}}>{entry[1]+' %'}</div>
                    </div>
                </div>
            })}
        </div>
        <h2>Biography</h2>
        <div className="quality">
            {Object.entries(props.details.biography).map((entry,i) => {
                if(entry[1] === 'null' || entry[1] === '-' || entry[1] === '') return <p key={i}><span className='Span'>{entry[0]+' : '}</span>{'[Data unavailable]'}</p>
                return <p key={i}><span className='Span'>{entry[0]+' : '}</span>{entry[1]}</p>               
            })}
        </div>
        <h2>Appearance</h2>
        <div className="quality">
            {Object.entries(props.details.appearance).map((entry,i) =>{
                if(entry[1] === 'null' || entry[1] === '-' || entry[1] === '') return <p key={i}><span className='Span'>{entry[0]+' : '}</span>{'[Data unavailable]'}</p>
                return <p key={i}><span className='Span'>{entry[0]+' : '}</span>{entry[1]}</p>               
            })}
        </div>
        <h2>Work</h2>
        <div className="quality">
            {Object.entries(props.details.work).map((entry,i) =>{
                if(entry[1] === 'null' || entry[1] === '-' || entry[1] === '') return <p key={i}><span className='Span'>{entry[0]+' : '}</span>{'[Data unavailable]'}</p>
                return<p key={i}><span className='Span'>{entry[0]+' : '}</span>{entry[1]}</p>               
            })}
        </div>
        <h2>Connections</h2>
        <div className="quality">
            {Object.entries(props.details.connections).map((entry,i) =>{
                if(entry[1] === 'null' || entry[1] === '-' || entry[1] === '') return <p key={i}><span className='Span'>{entry[0]+' : '}</span>{'[Data unavailable]'}</p>
                return <p key={i}><span className='Span'>{entry[0]+' : '}</span>{entry[1]}</p>               
            })}
        </div>
    </div>
)
}
export default superHero;