import React from 'react';
import { Link } from 'react-router-dom';
import Moons from './Moons.js'

const MissionTwo = (props) => {
    return (
        <>
        <div className="all">
            <div className="allMission"></div>
                <div className="miss container-fluid text-left text-white" style={{height: '30rem',padding:'5rem 3rem'}}>
                    <h3>MISSION</h3>
                    <h1>MOONS</h1>
                    <p>Blast of to a moon near you for scientific research. All areospace scientist, biologist, and material scientist welcomed. Moon mining will be an industry of the futrue. With so much to explore material science will be transformed. Icey Moons like Titan and Ariel have water and may even have life crawling around.</p>
                </div>

                <Moons {...props}/>

                <div className="containter-fluid padding text-white space">
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
        
            <div className="padding bg-dark text-center" style={{height: '7rem'}}>
                <div className="pt-4">
                    <small className="text-white">Ana Parra | Ariel Elazarov | Darys Bada | Dayan Evora | Gabrielle Farag | Patrick Reilly</small>
                </div>
            </div>
        </>

    );
};

export default MissionTwo;