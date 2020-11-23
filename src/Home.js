import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'

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
                        <h1>Invest in a Mission</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                        <button>Discover Space</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}




export default Home;