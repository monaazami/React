import React from 'react';


const Output = (props) => {
    const style={
        margin: '5px auto',
        padding:'10px',
        border:'1px solid gray',
        boxShadow: '0 2px 3px #7F7F7F',
        width:'50%',
        backgroundColor: '#DEDEDE'
    };
    return (
        <div style={style}>
            <p>Username : {props.userName}</p>
            <p>I am second paragraph!</p>
        </div>
    )
}

export default Output;