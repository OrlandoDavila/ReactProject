import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Dashboard} from './components/Dashboard'
import ListingList from './components/ListingComponents/ListingList'
import SignUpForm2 from './components/SignUpForm2'
import Nav from './components/Home/Nav'
import LoginApp from './components/Login/LoginApp'

function App() {
  return (


<Router> 


    <div className="App">
    <Nav/> {/*NAV BAR*/}
    
    <Switch>

    <Route exact path="/">
      <SignUpForm2/>
 
  
    </Route>

    <Route exact path="/login">
      <LoginApp/>
 
  
    </Route>


    <Route path = "/dashboard">
<Dashboard/>
      
    </Route>
{/* End of Sign up Form Route */}
    </Switch> 
    {/* End of Switch */}
    </div>

    </Router> //End Router
  );
}

export default App;
