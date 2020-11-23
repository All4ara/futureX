import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'
import MissionOne from './MissionOne.js'


const Home = () => {
    
    
    
    
    
    
    
    return(
        <>
            <Navbar/>

            <div className="container-fluid padding my-4">
                <div className="row text-center padding col-12">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <img className="img-thumbnail" src="https://ichef.bbci.co.uk/news/1024/branded_news/7727/production/_103330503_musk3.jpg" alt="the-Goat" style={{width:'100%'}}/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Invest in a Mission</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                        <Link to="/missions"><button className="px-5 py-3">Discover Space</button></Link>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid jumbotron">
                <div className="row text-center col-12"><hr></hr>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h1>Mission 1</h1> 
                        <p>Help fund a mission to mine both moons and planets in our solar system for natural resources such as Oil, Gold, Uranium.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h1> Mission 2</h1>
                        <p>Blast of to a new planet or moon for scientific research. All areospace scientist, biologist, and material scientist welcomed.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <h1> Mission 3</h1>
                        <p>Visit the International Space Station for a exclusive tour on the 239.4ft tube rotating 17,500/mph around our blue dot.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid padding my-4">
                <div className="row text-left padding col-12">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1>Benefits of Investing</h1>
                        <div class="list-group">
                            <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start ">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Cleaning Earth</h5>
                                <small>1 days ago</small>
                                </div>
                                <p class="mb-1">Reduce the amount of mining and oil drilling on Earth by funding a mission for space mining.</p>
                            </a>
                            <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Advancing Research</h5>
                                <small class="text-muted">5 days ago</small>
                                </div>
                                <p class="mb-1">Be part of the discovery experience and set out to do scientific research on any feild in areospace science.</p>
                            </a>
                            <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Make History</h5>
                                <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Each donation will be linked to your profile, each profile is updated into our data-base of Space Investors. You will be acknowledged during the mission success meeting on live television.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1>Gifts From an Investmant</h1>
                        <div class="list-group">
                            <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start ">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Level 1 Funding</h5>
                                <small>1 days ago</small>
                                </div>
                                <ul>
                                  <li class="mb-1"><strong>Space Material</strong> from the outer space body you choose.</li>  
                                  <li class="mb-1">Acknowledged as a <strong>Space Investor</strong>.</li>
                                </ul>
                                
                            </a>
                            <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Level 2 Funding</h5>
                                <small class="text-muted">5 days ago</small>
                                </div>
                                <ul>
                                  <li class="mb-1"><strong>Level 1 Funding perks</strong>.</li>  
                                  <li class="mb-1"><strong>Custom</strong> ring and braclet made from outer space materials.</li>
                                </ul>
                            </a>
                            <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Level 3 Funding</h5>
                                <small class="text-muted">3 days ago</small>
                                </div>
                                <ul>
                                <li class="mb-1"><strong>Level 2 Funding perks</strong>.</li>
                                  <li class="mb-1"><strong>ROI</strong> depending on donation amount.</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid padding bg-dark" style={{height: '20rem'}}>
                <div className="text-center padding col-12"><hr></hr>
                    
                    <h1 className="mt-5 text-white">History of FutureX</h1>
                   
                    
                </div>
            </div>

        </>
    )
}




export default Home;