import React, {useState} from 'react'
import './bugView.css'
import BugViewSection from './component/bugViewSection'
import PriorityController from '../../../Controllers/priorityController'
import {useDispatch} from 'react-redux'
import {markComplete} from '../../../Controllers/Redux/bugSlice'
import EditPanel from '../Bug Edit & Delete/editPanel'
import EditBug from '../Bug Create & Edit/bugForm'

// Showing the fields of the chosen bug from the bug view page
export default (props) =>{
    const dispatch = useDispatch();
    const {color, level} = PriorityController(props.bug.priority);

    const[displayEdit, setDisplayEdit] = useState(false);
    const cardStyle = {
        border: '5px 1px 1px 1px',
        borderColor: color,
        borderStyle: 'solid dotted solid dotted',
        borderWidth: '10px 1px 1px'
    };

    function editClicked() {
        setDisplayEdit(!displayEdit)
    };

    function deleteClicked() {

    };

    return (
        <>
            <div className='bug-view' style={cardStyle}>
                <h1 className='bug-card-title'>{props.bug.name}</h1>
                <BugViewSection title='Details' info={props.bug.details}/>
                <BugViewSection title='Steps' info={props.bug.steps}/>
                <BugViewSection title='Priority' info={level}/>
                <BugViewSection title='Creator' info={props.bug.creator}/>
                <BugViewSection title='ID' info={props.bug._id}/>
                <BugViewSection title='Version' info={props.bug.version}/>
                <BugViewSection title='Time Created' info={props.bug.time}/>
                <button className='complete-btn' onClick={() =>{dispatch(markComplete);}}>Mark Complete</button>
                <EditPanel editClicked={editClicked} deleteClicked={deleteClicked}/>
                <button onClick={props.Clicked} className='close-btn'>Close</button>            
            </div>
            <div className='edit-bug'>
                {displayEdit && <EditBug title='Edit Bug' click={editClicked} bug={props.bug}/>}
            </div>
        </>
        
    )
}