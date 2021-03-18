import React from 'react';
import './assets/css/header.css';
import { Link } from "react-router-dom";
function header() {
    return (
        <header>
            <div className="header-area">
                <div className="wrapper">
                    <div className="we-row">
                        <div className="logo we-col-2" id="logo">
                            <Link to='#' alt="Coffee Blend"> 
                                <span>Coffee</span>
                                <p>Blend</p>
                            </Link>
                        </div>
                        <div className="main-menu we-col-9">
                            <nav className="we-text-right"> 
                                <ul className="menu-ul">
                                    <li><Link to='#' alt="">Home</Link></li>
                                    <li><Link to='#' alt="">Menu</Link></li>
                                    <li><Link to='#' alt="">Services</Link></li>
                                    <li><Link to='#' alt="">Blog</Link></li>
                                    <li><Link to='#' alt="">About</Link></li>
                                    <li><Link className="cart" to='#' alt=""></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default header;