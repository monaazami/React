import React from 'react';


const Input = (props) => {
    const style ={
        backgroundColor: 'gray',
        border:'1px solid black',
        boxShadow: '0 2px 3px #7F7F7F',
    };
    return (
        <div>
            <input 
            style={style}
            type='text' 
            value={props.currentName} 
            onChange={props.changed}/>
        </div>
    )
}

export default Input;