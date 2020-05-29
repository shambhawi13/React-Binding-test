import React from 'react';
import classes from './UserInput.module.css';

const UserInput = (props)=>{
    return (
        <div className={classes.containerOutput}>
            <label>**Enter user name</label><br></br>
            <input type='text' onChange={props.changeUser} value={props.value}></input>
        </div>
    )
}

export default UserInput;