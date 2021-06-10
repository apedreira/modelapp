import React from 'react';
import '../styles/main.scss';
import YoutubeIcon from './Icons/YoutubeIcon';
import Logo from './Icons/Logo'
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <nav className="c-navbar">
            <Router>
                <div className="c-navbar-logo">ModelApp</div>

                <ul className="c-navbar-menu">

                    <li className="c-navbar-dropdown">
                        <a href="javascript:void(0)" className="c-navbar-dropbtn">Microbial models</a>
                        <div className="c-navbar-dropdown-content">
                            <Link to="/logistic-model">Logistic model</Link>
                            <Link to="/gompertz-model">Gompertz model</Link>
                        </div>
                    </li>
                    <li className="c-navbar-dropdown">
                        <a href="javascript:void(0)" className="c-navbar-dropbtn">Other models</a>
                        <div className="c-navbar-dropdown-content">
                            <Link to="/model-1">Model 1</Link>
                            <Link to="/model-2">Model 2</Link>
                            <Link to="/model-3">Model 3</Link>
                        </div>
                    </li>
                    <li>
                        <Link className="c-navbar-link" to="/not_dprn_link">Not droppable link</Link>
                    </li>

                </ul>
                <li className="c-navbar-dropdown u-pushright ">
                    
             
                        <Link className="c-navbar-link" to="/about-us">About us</Link>
                
                </li>

                <a className="c-navbar-icon c-navbar--pushright" href="https://twitter.com/">
                    <YoutubeIcon />
                </a>
            </Router>
        </nav>

    )
}

export default Navbar