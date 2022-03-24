import './App.css';
import Login from './components/Login';

import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import React, { Component } from 'react';
import Unauthorised from './components/Unauthorised';
import Home from './components/Home';

import { BrowserRouter as Router  } from 'react-router-dom';

//import { Redirect } from 'react-router';


const loggedIn = true;

class App extends Component {

  render() {
    return (
      <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Unauthorised" element={<Unauthorised/>}/>
          {/* <Route exact path="/Home" render={() =>(
            console.log(loggedIn),
          loggedIn ? <Route path="/Unauthorised" element= { <Navigate replace to = "/Unauthorised"/>}/>
          : (<Navigate replace to="/Home" />)
        )} /> */}
        {/* <Route exact path="/Home">
  {loggedIn ? <Navigate to="/Unauthorised" /> : <Home />}
</Route>  */}


 
     <Route exact path="/Home" element={<Home/>}/>
      </Routes>
    );
  }
}

export default App;
