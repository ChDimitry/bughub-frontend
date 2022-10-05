import React from 'react'
import './card.css'
import Priority from '../../../Controllers/priorityController'

export default (props) =>{
    const {level, color} = Priority(props.priority);
    return (
        <div className='dashboard-card'>
            <h1 style={{color: color}}>{props.count}</h1>
            <p>{level} {props.text}</p>
        </div>
    )
}