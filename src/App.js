import React, { useReducer } from 'react'
import Login from './Views/Pages/Login/login'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './Views/Sidebar/sidebar'
import ViewBugPage from './Views/Pages/viewBugs'
import CreateBug from './Views/Components/Bug Create & Edit/bugForm'
import Dashboard from './Views/Pages/Dashboard/dashboard'

//https://colorhunt.co/palette/2c36393f4e4fa27b5cdcd7c9
function App() {
  // Select the authSlice slice
  const {auth} = useSelector(state => state)
  return (
    <Router>
        {
          !auth.loggedIn ? <Login/> : 
          <>
            <Sidebar/>
            <Routes>
              <Route exact path='/viewbugs' element={<ViewBugPage/>}></Route>
              <Route path='/create' element={<CreateBug title='Create Bug'/>}></Route>
              <Route exact path='/' element={<Dashboard/>}></Route>
            </Routes>
          </>
        }
    </Router>
  );
}

export default App;
