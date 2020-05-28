import React from 'react';
import './CharComponent.css';

const CharComponent = (props)=>{
    return(
        <div className='char-container'>
            {props.char}
        </div>
    )
}

export default CharComponent;