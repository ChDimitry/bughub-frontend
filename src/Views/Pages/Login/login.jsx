import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../../../Controllers/Redux/authSlice'

import '../Login/login.css'


export default () =>{
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name: '',
        password: ''
    })
    // Takes an event and updates the current state
    function inputChanged(event) {
        setFormInput({
            ...formInput,
            // Get the value stored in the HTML attribute 'name'
            // It will match with the state's attributes
            [event.target.name]: event.target.value
        })
    }
    // Sends the formInput to the signIn function and dispatches it
    function submit(event) {
        dispatch(signIn(formInput));
        // Upon clicking the submit button, prevent the page from refreshing
        event.preventDefault();
    }

    return (
        <div className='loginBG'>
            <form className='login-panel'>
                <h1>Welcome</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <br/>
                <br/>
                <button type='sumbit' onClick={submit}>Login</button>
            </form>
        </div>
    )
}