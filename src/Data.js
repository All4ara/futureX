import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Data = (props) => {

    let [moon, setMoon] = useState({})
    console.log(props.match.params)

    useEffect(() => {

        Axios
            .get(`https://api.le-systeme-solaire.net/rest/bodies/`)
            .then(res => {
                console.log(res.data)
                let moon = res.data.bodies.find(eachBody=>{
                    return eachBody.englishName == props.moon
                })
                console.log(moon)
                setMoon(moon)
            })

    }, [])

    return(
           
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <h1>{moon.englishName}</h1>
                        <button className={`${props.moon} font-weight-bold`} style={{height: '200px',width: '200px',borderRadius: '50%',fontSize: '3rem',border:'none'}}></button>
                            <div className="overlay1">
                                <div>
                                <h5>Density: {moon.density} g/cm<small style={{fontSize:".8rem",position: "absolute"}}>3</small></h5>
                                <h5>Gravity: {moon.gravity} m/s<small style={{fontSize:".8rem",position: "absolute"}}>2</small></h5>
                                <h5>Escape Speed: {moon.escape} m/s<small style={{fontSize:".8rem",position: "absolute"}}>1</small></h5>
                                <h5>Equator Radius: {moon.equaRadius} km</h5>
                                <h5>Polar Radius: {moon.polarRadius} km</h5>
                                <h5>Discovered By: {moon.discoveredBy}</h5>
                                <h5>Discovery Date: {moon.discoveryDate}</h5>
                                </div>
                            </div>
                        
                    </div>
    );
};





export default Data;