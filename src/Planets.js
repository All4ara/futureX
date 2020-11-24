

import React from 'react'
import Data2 from './Data2.js'


const Planets = (props) => {
     
    return (
        <>

            <div className="moons container-fluid padding ">
                <div className="row text-center padding my-5 col-12">

                <Data2 planet="Mars" {...props}/>
                <Data2 planet="Venus" {...props}/>
                <Data2 planet="Europa" {...props}/>
                <Data2 planet="Pluto" {...props}/>
            
                </div>
            </div>
            
            
        </>
    )
}

export default Planets;