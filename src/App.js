
import './App.css';
import Home from './Home.js'
import Missions from './Missions.js'
import Moons from './Moons.js'
import { Route, Switch} from 'react-router-dom'
import React from 'react'
import Navbar from "./Navbar.js"
import MissionOne from './MissionOne.js'
import MissionTwo from './MissionTwo.js'
import MissionThree from './MissionThree.js'
import Planets from './Planets.js'
import Data from './Data.js'

function App() {
  return (
    <>
      <Navbar/>

      

      <Switch>

        <Route exact path='/' render={(props) => <Home {...props}/>}/>
        <Route exact path='/missions' render={(props) => <Missions {...props}/>}/>

        <Route exact path='/moons' render={(props) => <Moons {...props}/>}/>
        <Route exact path='/planets' render={(props) => <Planets {...props}/>}/>
        <Route exact path='/missions/m1' render={(props) => <MissionOne {...props}/>}/>
        <Route exact path='/missions/m2' render={(props) => <MissionTwo {...props}/>}/>
        <Route exact path='/missions/m3' render={(props) => <MissionThree {...props}/>}/>

        

      </Switch>



    </>
  );
}

export default App;
