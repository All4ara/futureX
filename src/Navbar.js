import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top">
                <div className="container-fluid">
                    <Link to="/"><span className="navbar-name">FutureX</span></Link>
                    
                    <button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto text-right">
                            <li className="nav-item ">
                                <a className="nav-link mx-1" href="#1">Discover Space</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-1" href="google.com">About FutureX</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/moons"><a className="nav-link mx-1" href="google.com">LogIn</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default Navbar;