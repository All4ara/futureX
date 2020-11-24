import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'

const MissionOne = () => {
    return (
        <>
        <div className="all">
            <div className="allMission">
                <div className="container-fluid  text-left text-white" style={{height: '30rem',padding:'5rem 3rem'}}>
                    <h1>Mission One</h1>
                    <p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p>
                </div>
                <div className="containter-fluid padding text-white space">
                    <div class="row" style={{height: '8rem'}}>
                        <div class="lvl col padding">
                            <strong>Level 1</strong>
                        </div>
                        
                        <div class="col col-lg-2">
                            <button class="btn-outline">Buy</button>
                        </div>
                    </div>
                    <hr className="bg-light "></hr>
                    <div class="row" style={{height: '8rem'}}>
                        <div class="lvl col padding">
                            <strong>Level 2</strong>
                        </div>
                        
                        <div class="col col-lg-2">
                            <button class="btn-outline">Buy</button>
                        </div>
                    </div>
                    <hr className="bg-light "></hr>
                    <div class="row" style={{height: '8rem'}}>
                        <div class="lvl col padding">
                            <strong>Level 3</strong>
                        </div>
                        
                        <div class="col col-lg-2">
                            <button class="btn-outline">Buy</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="padding bg-dark text-center" style={{height: '3rem'}}>
            <div className="pt-4">
                <small className="text-white">Ana Parra | Ariel Elazarov | Darys Bada | Dayan Evora | Gabrielle Farag | Patrick Reilly</small>
            </div>
        </div>
        </>

    );
};

export default MissionOne;