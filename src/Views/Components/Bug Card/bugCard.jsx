import React from 'react'
import '../../Components/Bug Card/bugCard.css'
import PriorityController from '../../../Controllers/priorityController'


export default (props) =>{
    // Destructer the bugModel and take the bug's name, priority and version
    const {name, priority, version, time, _id, creator} = props.bug;
    // Pass in the bug priority to get it's level and color
    const {level, color} = PriorityController(priority);
    const cardStyle = {
        border: '5px 1px 1px 1px',
        borderColor: color,
        borderStyle: 'solid',
        borderWidth: '10px 1px 1px',
        cursor: 'pointer'
    };
    function Clicked() {
        props.clicked(_id);
    }
    return (
        <div className='bug-card' onClick={Clicked} style={cardStyle}>
            <h5 className='details'>{_id} {version}</h5>
            <h1 className='name'>{name}</h1>
            <p className='creator'>Created by {creator}</p>
        </div>
    )
}