import logo from './logo.svg';
import './App.css';
// import {Components} from './components'
import Home from './Home.js'
import Missions from './Missions.js'
import { Route, Switch, Link } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <>
      

      <Switch>

        <Route exact path='/' render={(props) => <Home {...props}/>}/>

        <Route exact path='/missions' render={(props) => <Missions {...props}/>}/>


      </Switch>



    </>
  );
}

export default App;
