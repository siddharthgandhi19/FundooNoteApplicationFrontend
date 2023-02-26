import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import SignIn from '../pages/signin/SignIn'
import SignUp from '../pages/signup/SignUp'


function Router1() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path= '/' element ={<SignIn/>} />
            <Route path= '/signup' element ={<SignUp/>} />
            <Route path= '/dashboard' element ={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default Router1