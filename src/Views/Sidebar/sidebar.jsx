import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signOut} from '../../Controllers/Redux/authSlice'
import '../Sidebar/sidebar.css'
export default () =>{
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state);
    const pathname = window.location.pathname;

    function SignOut() {
        dispatch(signOut());
    }
    return (
        <div className='sidebar-wrap'>
            <div className='sidebar'>
                <Link className='nav-link' to='/'>
                    <h1 className='brand'>
                        BugHub.
                    </h1>
                </Link>

                <Link to='/' className='nav-link'><button className='sidebar-btn'>Dashboard</button></Link>
                <Link to='/viewbugs' className='nav-link'><button className='sidebar-btn'>View Bugs</button></Link>
                {/*Only an admin has the ability to create new bugs*/}
                {auth.admin && <Link to='/create' className='nav-link'><button className='sidebar-btn'>Create Bug</button></Link>}
                <button className='logout' onClick={SignOut}>Logout</button>
            </div>
            <div className='sidebar-info'>
                <span>
                    Bug tracking is the process of logging and monitoring bugs or errors during software testing. 
                    It is also referred to as defect tracking or issue tracking.
                    Large systems may have hundreds or thousands of defects. Each needs to be evaluated, monitored and prioritized for debugging. 
                    In some cases, bugs may need to be tracked over a long period of time.
                </span>
            </div>
        </div>
        
    )
}