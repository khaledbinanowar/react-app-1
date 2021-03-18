import React from 'react';
import './assets/css/info.css';
import Appointment from '../components/Appointment';
function info() {
    return (
        <div className="info">
            <div className="we-row wrapper">
                <div className="we-row">
                    <div className="we-col-9 we-row">
                        <div className="info-item we-col-4 we-row">
                            <div className="icon we-col-2">
                                <span className="icon-phone">&#9990;</span>
                            </div>
                            <div className="text we-col-10">
                                <h3>000 (123) 456 7890</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                        <div className="info-item we-col-4 we-row">
                            <div className="icon we-col-2">
                                <span className="icon-phone">&#9990;</span>
                            </div>
                            <div className="text we-col-10">
                                <h3>198 West 21th Street</h3>
                                <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                        </div>
                        <div className="info-item we-col-4 we-row">
                            <div className="icon we-col-2">
                                <span className="icon-phone">&#9990;</span>
                            </div>
                            <div className="text we-col-10">
                                <h3>Open Monday-Friday</h3>
                                <p>8:00am - 9:00pm</p>
                            </div>
                        </div>
                    </div>
                    <Appointment />
                </div>
            </div>
        </div>
    )
}
export default info;