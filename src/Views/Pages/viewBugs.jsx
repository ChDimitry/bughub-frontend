import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs} from '../../Controllers/Redux/bugSlice'
import BugCard from '../Components/Bug Card/bugCard'
import BugView from '../Components/Bug View/bugView'
import Draggable from 'react-draggable'

export default () =>{
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        _id: '',
        isDisplayed: false,
    })
    const openCards = [];
    // Get bugs when there are no bugs displayed
    useEffect(
        () =>{
            dispatch(getBugs());
        },
        [bugs.length < 1]
    )
    
    // Display the bug the user clicked on
    function BugClicked(_id) {
        SET_DISPLAY_BUG({
            isDisplayed: !DISPLAY_BUG.isDisplayed,
            _id: _id,
        })
    }
    
    return (
        <div className='page-container'>
            <Draggable>
                <div style={{ cursor: 'grab', zIndex: '10'}}>
                    {DISPLAY_BUG.isDisplayed && <BugView Clicked={BugClicked} bug={bugs.filter((bug) => bug._id == DISPLAY_BUG._id)[0]} />}
                </div>
            </Draggable>
            {bugs.map((bug,key) => (
                <BugCard key={key} bug={bug} clicked={BugClicked}/>
            ))}
        </div>
    )
}