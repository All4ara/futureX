import React from 'react';
import { Link } from 'react-router-dom';


const Missions = (props) => {
    
    
    
    
    return (
        <>

            <div className="container-fluid padding mt-4 border-bottom" style={{height: '18rem'}}>
                <div className="row text-center padding my-5 col-12">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Mission 1</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="/missions/m1"><button className="px-5 py-3 mt-5">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid padding mt-4 border-bottom">
                <div className="row text-center padding mb-5 col-12">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="/missions/m2"><button className="px-5 py-3 mt-5">See Details</button></Link>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Mission 2</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid padding mt-4 border-bottom" style={{height: '18rem'}}>
                <div className="row text-center padding my-5 col-12">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Mission 3</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="/missions/m3"><button className="px-5 py-3 mt-5">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="padding bg-dark text-center" style={{height: '7rem'}}>
                <div className="pt-4">
                    <small className="text-white">Ana Parra | Ariel Elazarov | Darys Bada | Dayan Evora | Gabrielle Farag | Patrick Reilly</small>
                </div>
            </div>
        </>
    )
}



export default Missions;