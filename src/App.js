import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Missions from './Missions.js'
import Moons from './Moons.js'
import { Route, Switch, Link } from 'react-router-dom'
import React from 'react'
<<<<<<< HEAD
import Navbar from "./Navbar.js"
=======
import MissionOne from './MissionOne.js'
import MissionTwo from './MissionTwo.js'
import MissionThree from './MissionThree.js'
>>>>>>> 8999aa242f6a59cbc6fb5d52afd9f04f6bc311d9

function App() {
  return (
    <>
<<<<<<< HEAD
      <Navbar/>
=======
>>>>>>> 8999aa242f6a59cbc6fb5d52afd9f04f6bc311d9

      <Switch>

        <Route exact path='/' render={(props) => <Home {...props}/>}/>
        <Route exact path='/missions' render={(props) => <Missions {...props}/>}/>
<<<<<<< HEAD

        <Route exact path='/moons' render={(props) => <Moons {...props}/>}/>
=======
        <Route exact path='/missions/m1' render={(props) => <MissionOne {...props}/>}/>
        <Route exact path='/missions/m2' render={(props) => <MissionTwo {...props}/>}/>
        <Route exact path='/missions/m3' render={(props) => <MissionThree {...props}/>}/>

>>>>>>> 8999aa242f6a59cbc6fb5d52afd9f04f6bc311d9
      </Switch>



    </>
  );
}

export default App;
