import React from 'react';
import { Link } from 'react-router-dom';


const Missions = (props) => {
    
    
    
    
    return (
        <>
        <div className="all">
            <div className="mission1 container-fluid padding border-bottom" style={{height: '35rem'}}>
                <div className="row text-left padding my-5 col-12">
                    <div className="missionTxt col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Mission 1</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                    </div>
                    <div className="missionBttnR col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="/missions/m1"><button className="missionB px-5 py-3 mt-5">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="mission2 container-fluid padding mt-4 border-bottom" style={{height: '35rem'}}>
                <div className="row text-right padding mb-5 col-12">
                    <div className="missionBttn col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="/missions/m2"><button className="missionB px-5 py-3 mt-5">See Details</button></Link>
                    </div>
                    <div className="missionTxt col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Mission 2</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                    </div>
                </div>
            </div>
            <div className="mission3 container-fluid padding mt-4 border-bottom" style={{height: '35rem'}}>
                <div className="row text-left padding my-5 col-12">
                    <div className="missionTxt col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="mt-5">Mission 3</h1>
                        <p>Join Scientists, Companies and Governmants in discovering the sectets of the solar system by investing in a FutureX Mission.</p>
                    </div>
                    <div className="missionBttnR col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="/missions/m3"><button className="missionB px-5 py-3 mt-5">See Details</button></Link>
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
        
        </>
    )
}



export default Missions;