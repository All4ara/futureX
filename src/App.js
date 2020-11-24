import logo from './logo.svg';
import './App.css';
// import {Components} from './components'
import Home from './Home.js'
import Missions from './Missions.js'
import Moons from './Moons.js'
import { Route, Switch, Link } from 'react-router-dom'
import React from 'react'
import Navbar from "./Navbar.js"

function App() {
  return (
    <>
      <Navbar/>

      <Switch>

        <Route exact path='/' render={(props) => <Home {...props}/>}/>

        <Route exact path='/missions' render={(props) => <Missions {...props}/>}/>

        <Route exact path='/moons' render={(props) => <Moons {...props}/>}/>
      </Switch>



    </>
  );
}

export default App;
