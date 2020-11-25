import React from 'react';
import { Link } from 'react-router-dom';
import Planets from './Planets.js'

const MissionThree = (props) => {
    return (
        <>
        <div className="all">
            <div className="allMission"></div>
                <div className="miss2 container-fluid text-left text-white" style={{height: '30rem',padding:'5rem 3rem'}}>
                    <h3>MISSION</h3>
                    <h1>MARS & BEYOND</h1>
                    <p>WHY MARS?<br></br>At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth. Together the Starship spacecraft and Super Heavy rocket create a reusable transportation system capable of on orbit refueling and leveraging Mars’ natural H2O and CO2 resources to refuel on the surface of Mars.</p>
                </div>

                <Planets {...props}/>

                <div className="fund containter-fluid padding text-white space">
                    <div class="row" style={{height: '8rem'}}>
                        <div class="lvl col padding">
                            <h2>Level 1 Funding</h2>
                            <h3>Space Material from the outer space body you choose.</h3>
                            <h3>Acknowledged as a Space Investor.</h3>
                        </div>
                        
                        <div class="col col-lg-2">
                            <button class="btn-outline">Buy</button>
                        </div>
                    </div>
                    <hr className="bg-light "></hr>
                    <div class="row" style={{height: '8rem'}}>
                        <div class="lvl col padding">
                            <h2>Level 2 Funding</h2>
                            <h3>Level 1 Funding perks.</h3>
                            <h3>Custom ring and braclet made from outer space materials.</h3>
                        </div>
                       
                        <div class="col col-lg-2">
                            <button class="btn-outline">Buy</button>
                        </div>
                    </div>
                    <hr className="bg-light "></hr>
                    <div class="row" style={{height: '8rem'}}>
                        <div class="lvl col padding">
                            <h2>Level 3 Funding</h2>
                            <h3>Level 2 Funding perks.</h3>
                            <h3>ROI depending on donation amount.</h3>
                        </div>
                        
                        <div class="col col-lg-2">
                            <button class="btn-outline">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer container-fluid padding" style={{height: '7rem'}}>
                <div className="text-center padding col-12"><hr></hr>
                    <div className="pt-4 text-white">
                        <small className="text-white"><a className="text-white" href="https://www.linkedin.com/in/anacparrac/">Ana Parra </a>| <a className="text-white" href="https://www.linkedin.com/in/arielelazarov/">Ariel Elazarov</a> | <a className="text-white" href="https://www.linkedin.com/in/darysbada/">Darys Bada</a> | <a className="text-white" href="https://www.linkedin.com/in/dayanevora/">Dayan Evora</a> | <a className="text-white" href="https://www.linkedin.com/in/gabriellefarag">Gabrielle Farag</a> | <a className="text-white" href="https://www.linkedin.com/in/psreilly/">Patrick Reilly</a></small>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MissionThree;