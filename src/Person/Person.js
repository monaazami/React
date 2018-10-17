import React from 'react';
import './Person.css' 

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clicked}>I am {props.name} and {props.age} years old!</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
        
    )
}
export default Person;