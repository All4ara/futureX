import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Missions from './Missions.js'
import { Route, Switch, Link } from 'react-router-dom'
import React from 'react'
import MissionOne from './MissionOne.js'
import MissionTwo from './MissionTwo.js'
import MissionThree from './MissionThree.js'

function App() {
  return (
    <>

      <Switch>

        <Route exact path='/' render={(props) => <Home {...props}/>}/>
        <Route exact path='/missions' render={(props) => <Missions {...props}/>}/>
        <Route exact path='/missions/m1' render={(props) => <MissionOne {...props}/>}/>
        <Route exact path='/missions/m2' render={(props) => <MissionTwo {...props}/>}/>
        <Route exact path='/missions/m3' render={(props) => <MissionThree {...props}/>}/>

      </Switch>



    </>
  );
}

export default App;
