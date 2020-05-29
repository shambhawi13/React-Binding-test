import React from 'react';
import classes from './UserOutput.module.css';

const UserInput = (props)=>{
    return(
        <div className={classes.containerOutput}>
            <p className={classes.para}>User Input : {props.username}</p>
            <p className={classes.para}>User Input : {props.username}</p>
        </div>
    )
}

export default UserInput;