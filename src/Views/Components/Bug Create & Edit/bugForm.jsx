import React, {useEffect, useState} from 'react'
import './bugForm.css'
import {useSelector} from 'react-redux'
import PriorityController from '../../../Controllers/priorityController'
import BugViewSection from '../Bug View/component/bugViewSection'
import formStyle from '../Bug View/bugView.css'
import Draggable from 'react-draggable'
import BugModel from '../../../Models/bugModel'

export default (props) =>{
    const {bugs} = useSelector(state => state);
    var rightNow = new Date();


    const [bugModel, setBugModel] = useState(new BugModel(props.bug));

    function inputChanged(e) {
        setBugModel({
            ...bugModel,
            [e.target.name]: e.target.value,
            version: '1.0',
            time: rightNow.getFullYear() + '/' + (rightNow.getMonth() + 1) + '/' + rightNow.getDate() + ' ' + rightNow.getHours() + ':' + rightNow.getMinutes(),
        })
    }

    const {color, level} = PriorityController(bugModel.priority);

    const cardStyle = {
        border: '5px 1px 1px 1px',
        borderColor: color,
        borderStyle: 'solid dotted solid dotted',
        borderWidth: '10px 1px 1px',
        boxShadow: '4px 4px 20px var(--shadow-color)',
        position: 'relative',
    };

    return (
        <div className='page-container'>
            <div className='bug-create' style={props.title == 'Edit Bug' ? cardStyle : formStyle}>
                <h1>{props.title}</h1>
                <form>

                    <div className='left'>
                        <label>Name</label>
                        <input name='name' placeholder='The name of the bug..' onChange={inputChanged} value={bugModel.name} required></input>
                        <label>Details</label>
                        <textarea name='details' placeholder='Details about the bug..' onChange={inputChanged} value={bugModel.details} required></textarea>
                        
                        <label>Steps</label>
                        <textarea name='steps' placeholder='Steps needed to recreate the bug..' onChange={inputChanged} value={bugModel.steps} required></textarea>
                    </div>

                    <div className='right'>
                        <label>Priority</label>
                        <select name='priority' onChange={inputChanged} value={bugModel.priority} required>
                            <option value='1'>High</option>
                            <option value='2'>Medium</option>
                            <option value='3'>Low</option>
                        </select>
                        <label>Assigned</label>
                        <select name='assigned' onChange={inputChanged} value={bugModel.assigned}>
                            <option>Dima</option>
                        </select>
                        <label>Version</label>
                        <input id='version' name='version' onChange={inputChanged} value={bugModel.version} placeholder='1.0'></input>
                    </div>
                    <button type='sumbit'>{props.title}</button>
                    {props.title == 'Edit Bug' && <button className='close-btn' onClick={props.click}>Close</button>}
                </form>
            </div>
            {props.title == 'Create Bug' && <div className='bug-create-example'>
                <div>
                    <h1>Your Bug-Card</h1>
                    <div className='bug-view' style={cardStyle}>
                        <h1>{bugModel.name}</h1>
                        <BugViewSection title='Details' info={bugModel.details}/>
                        <BugViewSection title='Steps' info={bugModel.steps}/>
                        <BugViewSection title='Priority' info={level}/>
                        <BugViewSection title='Creator' info={bugModel.creator}/>
                        <BugViewSection title='ID' info={bugs.length + 1}/>
                        <BugViewSection title='Version' info={bugModel.version}/>
                        <BugViewSection title='Time Created' info={bugModel.time}/>
                    </div>
                </div>
            </div>}
        </div>
        
    )
}