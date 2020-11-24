import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'

const MissionOne = () => {
    return (
        <>
        <Navbar />
            <div className="container-fluid padding text-center bg-dark text-white" style={{height: '30rem'}}>
                <h1>Mission One</h1>
                <p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p>
            </div>
            <div className="containter-fluid padding bg-dark text-white">
                <div class="row" style={{height: '8rem'}}>
                    <div class="col padding">
                        <strong>Level 1</strong>
                    </div>
                    <div class="col-md-auto">
                        $$$
                    </div>
                    <div class="col col-lg-2">
                        <button class="btn-outline-dark rounded-pill">Buy</button>
                    </div>
                </div>
                <hr></hr>
                <div class="row" style={{height: '8rem'}}>
                    <div class="col padding">
                        <strong>Level 2</strong>
                    </div>
                    <div class="col-md-auto">
                        $$$
                    </div>
                    <div class="col col-lg-2">
                        <button class="btn-outline-dark rounded-pill">Buy</button>
                    </div>
                </div>
                <hr></hr>
                <div class="row" style={{height: '8rem'}}>
                    <div class="col padding">
                        <strong>Level 3</strong>
                    </div>
                    <div class="col-md-auto">
                        $$$
                    </div>
                    <div class="col col-lg-2">
                        <button class="btn-outline-dark rounded-pill">Buy</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MissionOne;