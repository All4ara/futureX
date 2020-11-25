import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    
    
    
    
    
    
    
    return(
        <div className="all">
            

            <div className="container-fluid padding" style={{height:"40rem"}}>
                <div className="home row text-left padding col-12">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <img className="img-thumbnail" src="https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg" alt="the-Goat" style={{width:'100%'}}/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Invest in a spaceX Mission</h1>
                        <p>Join scientists, companies and governments in discovering the secrets of the solar system by investing in a spacex mission.</p>
                        <Link to="/missions"><button className="px-5 py-3 home-btn-outline" style={{fontSize:"2rem",border:"2px solid white"}}>Discover Space</button></Link>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="allback row text-center col-12"><hr></hr>
                    <div className="back1 text-left col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h3>MISSION</h3>
                        <h1>SPACESTATION</h1> 
                        <p>Designed from the beginning to transport people. SpaceX's Dragon spacecraft is capable of carrying both NASA astronauts and private passengers to destinations in low-Earth orbit, the Moon, and beyond.</p>
                    </div>
                    <div className="back2 text-right col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h3>MISSION</h3>
                        <h1>THE MOON</h1>
                        <p>Blast of to a new planet or moon for scientific research. All areospace scientist, biologist, and material scientist welcomed.</p>
                        <div className="back22 text-left">
                        <h3>MISSION</h3>
                        <h1>MARS & BEYOND</h1> 
                        <p>“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”-Elon Musk</p>
                        </div>
                    </div>
                    <div className="back3 text-left col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="container-fluid padding">
                            <div className="benefits row text-left padding col-12">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h1>Benefits of Investing</h1>
                                    <div class="">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Cleaning Earth</h5>
                                        </div>
                                            <p class="mb-1">Reduce the amount of mining and oil drilling on Earth by funding a mission for space mining.</p>
                                    
                                    
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Advancing Research</h5>
                                        
                                        </div>
                                            <p class="mb-1">Be part of the discovery experience and set out to do scientific research on any feild in areospace science.</p>
                                    
                                    
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Make History</h5>
                                        
                                        </div>
                                            <p class="mb-1">Each donation will be linked to your profile, each profile is updated into our data-base of Space Investors. You will be acknowledged during the mission success meeting on live television.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h1>Gifts From an Investment</h1>
                                    <div class="list-group">
                                    
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Level 1 Funding</h5>
                                            </div>
                                            <ul>
                                            <li class="mb-1"><strong>Space Material</strong> from the outer space body you choose.</li>  
                                            <li class="mb-1">Acknowledged as a <strong>Space Investor</strong>.</li>
                                            </ul>
                                            
                                    
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Level 2 Funding</h5>
                                            </div>
                                            <ul>
                                            <li class="mb-1"><strong>Level 1 Funding perks</strong>.</li>  
                                            <li class="mb-1"><strong>Custom</strong> ring and braclet made from outer space materials.</li>
                                            </ul>
                                    
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Level 3 Funding</h5>
                                            </div>
                                            <ul>
                                            <li class="mb-1"><strong>Level 2 Funding perks</strong>.</li>
                                            <li class="mb-1"><strong>ROI</strong> depending on donation amount.</li>
                                            </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back4 text-right col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h1 className="text-left">History of SpaceX</h1>
                        <p>
                            The first privately funded, liquid-fueled rocket to reach orbit (2008)<br></br>
                            The first private company to send a spacecraft to the International Space Station (2012)<br></br>
                            The first private company to send a satellite into geosynchronous orbit (2013)<br></br>
                            The first private company to send a probe beyond Earth orbit (2015)<br></br>
                            The first landing of a first stage orbital capable rocket (2015)<br></br>
                            The first water landing of a first stage orbital capable rocket (2016)<br></br>
                            The first private company to send humans into orbit (2020)
                        </p>
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

        </div>
    )
}




export default Home;