import React from 'react'

const ISS = () => {
     
    return (
        <>
            
            <div className="iss container-fluid padding ">
                <div className="row text-center padding my-5 col-12">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <h1>ISS</h1>
                        <button className="btn0 font-weight-bold" style={{height: '600px',width: '800px',fontSize: '3rem',border:'none'}}></button>
                        <div className="overlay5">
                            
                                <h1>Current Location: 25.693° N, -46.976° E</h1>
                                
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ISS;