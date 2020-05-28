import React from 'react';
import './ValidationComponent.css'

const ValidationComponent = (props)=>{
    const desc = props.length <= 5? 'Text too short':'Text long enough';
    return (
        <div className='inline'>
            <p className='desc'>**{desc}</p>
        </div>
    )
}
export default ValidationComponent;