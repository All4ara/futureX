
import Navbar from './Navbar.js'
import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const Moons = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    
    
    return (
        <>
            <Navbar/>

            <div className="container-fluid padding " style={{height: '12rem'}}>
                <div className="row text-center padding my-5 col-12" style={{padding: '15rem 0'}}>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <button onClick={handleShow} className="btn1 font-weight-bold" style={{height: '200px',width: '200px',borderRadius: '50%',fontSize: '3rem',border:'none'}}>Moon</button>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn2 font-weight-bold" style={{height: '200px',width: '200px',borderRadius: '50%',fontSize: '3rem',border:'none'}}>IO</button>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn3 font-weight-bold" style={{height: '200px',width: '200px',borderRadius: '50%',fontSize: '3rem',border:'none'}}>Titan</button>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn4 font-weight-bold" style={{height: '200px',width: '200px',borderRadius: '50%',fontSize: '3rem',border:'none'}}>Ariel</button>
                    </div>
                </div>
            </div>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                
                    <Modal.Title>Moon</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <h5>Density: 3.344 g/cm<small style={{fontSize:".8rem",position: "absolute"}}>3</small></h5>
                    <h5>Gravity: 1.62 m/s<small style={{fontSize:".8rem",position: "absolute"}}>2</small>  ...or 16.6% of Earths Gravity</h5>
                    <h5>Escape Speed: 2380 m/s<small style={{fontSize:".8rem",position: "absolute"}}>1</small></h5>
                    <h5>Equator Radius: 1738 km</h5>
                    <h5>Polar Radius: 1736 km</h5>
                    <h5>Discovered By: N/A</h5>
                    <h5>Discovery Date: N/A</h5>

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Select Mission
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Moons;