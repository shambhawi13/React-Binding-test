import React from 'react';
import classes from './ValidationComponent.module.css';

const ValidationComponent = (props)=>{
    const desc = props.length <= 5? 'Text too short':'Text long enough';
    const classToBeApplied = props.length <= 5? classes.red : classes.green;
    return (
        <div className={classes.inline}>
            <p className={`${classToBeApplied} ${classes.desc}`}>**{desc}</p>
        </div>
    )
}
export default ValidationComponent;