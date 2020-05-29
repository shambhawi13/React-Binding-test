import React from 'react';
import classes from './CharComponent.module.css';

const CharComponent = (props)=>{
    return(
        <div onClick={props.click} className={classes.charContainer}>
            {props.char}
        </div>
    )
}

export default CharComponent;