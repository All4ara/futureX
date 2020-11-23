import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-dark sticky-top">
                <div className="container-fluid">
                    <Link to="/"><span className="navbar-name">FutureX</span></Link>
                    
                    <button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto text-right">
                            <li className="nav-item ">
                                <button className="nav-link mx-1" href="#1">Discover Space</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link mx-1" href="google.com">About FutureX</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link mx-1" href="google.com">LogIn</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default Navbar;