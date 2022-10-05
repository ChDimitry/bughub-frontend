import React from 'react'
import './bugViewSection.css'

// The information section of each viewed bug
export default (props) =>{
    return (
        <div className='view-section'>
            <h4>
                {props.title}
            </h4> 
            <p>
                {props.info}
            </p>
        </div>
    )
}