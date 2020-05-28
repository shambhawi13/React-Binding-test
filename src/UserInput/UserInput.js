import React from 'react';
import './UserInput.css';

const UserInput = (props)=>{
    return (
        <div className='container-output'>
            <label>**Enter user name</label><br></br>
            <input type='text' onChange={props.changeUser} value={props.value}></input>
        </div>
    )
}

export default UserInput;