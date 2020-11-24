
import React from 'react'
import Data from './Data.js'

const Moons = (props) => {  
    return (
        <>
            
            <div className="moons container-fluid padding ">
                <div className="row text-center padding my-5 col-12">

                <Data moon="Moon" {...props}/>
                <Data moon="Io" {...props}/>
                <Data moon="Titan" {...props}/>
                <Data moon="Ariel" {...props}/>
               
                </div>
            </div>
            
        </>
    )
}

export default Moons;