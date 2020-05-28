import React from 'react';
import './CharComponent.css';

const CharComponent = (props)=>{
    return(
        <div onClick={props.click} className='char-container'>
            {props.char}
        </div>
    )
}

export default CharComponent;