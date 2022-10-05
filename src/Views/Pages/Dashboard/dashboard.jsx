import React, {useEffect} from 'react'
import Card from '../../Components/Dashboard/card'
import './dashboard.css'
import {getBugs} from '../../../Controllers/Redux/bugSlice'
import {useDispatch, useSelector} from 'react-redux'
import BugModel from '../../../Models/bugModel'
import BugViewSection from '../../Components/Bug View/component/bugViewSection'
import PriorityController from '../../../Controllers/priorityController'
import '../../Components/Bug View/bugView.css'
import {Link} from 'react-router-dom'


export default () =>{
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugs);
    let highCount = 0;
    let midCount = 0;
    let lowCount = 0;

    if (bugs !== undefined) {
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    };

    const bugModel = new BugModel(bugs[0]);
    const {color, level} = PriorityController(bugModel.priority);
    const cardStyle = {
        border: '5px 1px 1px 1px',
        borderColor: color,
        borderStyle: 'solid dotted solid dotted',
        borderWidth: '10px 1px 1px',
        position: 'relative',
        margin: '10px'
    };

    // Returns the number of bugs having a given priority
    function filterBugs(priority) {
        return bugs.filter((bug) =>{ return bug.priority == priority })
    };

    useEffect(() =>{
        dispatch(getBugs())
    }, [bugs == undefined]);

    return (
        <div className='page-container'>
            <div className='open-bug-cards'>
                <h1>Bug-Cards:</h1>
                {highCount != 0 && <Card priority='1' text='Priority' count={highCount.length} />}
                {midCount != 0 && <Card priority='2' text='Priority' count={midCount.length} />}
                {lowCount != 0 && <Card priority='3' text='Priority' count={lowCount.length} />}
                <Card priority='' text='Total Bug-Cards' count={bugs.length} />
            </div>
            
            <div className='statistics-info'>
                <p>
                    User's info and statistics.
                    
                </p>
            </div>

            <div className='newest-bug'>
                <h1>Latest Bug-Card:</h1>
                <div className='bug-view' style={cardStyle}>
                    <h1>{bugModel.name}</h1>
                    <BugViewSection title='Details' info={bugModel.details}/>
                    <BugViewSection title='Steps' info={bugModel.steps}/>
                    <BugViewSection title='Priority' info={level}/>
                    <BugViewSection title='Creator' info={bugModel.creator}/>
                    <BugViewSection title='ID' info={bugModel._id}/>
                    <BugViewSection title='Version' info={bugModel.version}/>
                    <BugViewSection title='Time Created' info={bugModel.time}/>
                </div>
                <p id='view-newest-bug'>
                    View this Bug-Card in the <Link id='bug-view-link' to='/viewbugs' className='nav-link'>View Bugs</Link> page.
                </p>
            </div>
        </div>
    );
}