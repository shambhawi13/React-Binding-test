import React from 'react';
import './UserOutput.css';

const UserInput = (props)=>{
    return(
        <div className='container-output'>
            <p className='para'>User Input : {props.username}</p>
            <p className='para'>User Input : {props.username}</p>
        </div>
    )
}

export default UserInput;