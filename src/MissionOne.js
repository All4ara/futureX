import React from 'react';
import { Link } from 'react-router-dom';
import ISS from './ISS.js'


const MissionOne = () => {
    return (
        <>
            <div className="all">
                <div className="allMission">
                    <div className="m1 container-fluid  text-left text-white">
                        <h3>MISSION</h3>
                        <h1>Internationl Space Station</h1>
                        <p>NASA is working to build up the business case for future commercial space stations that will eventually serve as successors for the ISS. Part of that is demonstrating the kinds of activities that could be done on those future space stations.</p>
                    </div>
                    <ISS/>
                    <div className="containter-fluid padding text-white space">
                        <div className="row" style={{height: '8rem'}}>
                            <div className="lvl col padding">
                                <h2>Level 1 Funding</h2>
                                <h3>Space Material from the outer space body you choose.</h3>
                                <h3>Acknowledged as a Space Investor.</h3>
                            </div> 
                            <div className="col col-lg-2">
                                <button className="btn-outline">Buy</button>
                            </div>
                        </div>   
                        <hr className="bg-light"/>
                        <div className="row" style={{height: '8rem'}}>
                            <div className="lvl col padding">
                                <h2>Level 2 Funding</h2>
                                <h3>Level 1 Funding perks.</h3>
                                <h3>Custom ring and braclet made from outer space materials.</h3>
                            </div>                   
                            <div className="col col-lg-2">
                                <button className="btn-outline">Buy</button>
                            </div>
                        </div>                      
                        <hr className="bg-light "/>
                        <div className="row" style={{height: '8rem'}}>
                            <div className="lvl col padding">
                                <h2>Level 3 Funding</h2>
                                <h3>Level 2 Funding perks.</h3>
                                <h3>ROI depending on donation amount.</h3>
                            </div>
                            <div className="col col-lg-2">
                                <button className="btn-outline">Buy</button>
                            </div>
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

export default MissionOne;