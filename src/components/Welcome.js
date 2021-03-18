import React from 'react';
import welcomebg from './assets/images/bg_2.jpg';
import './assets/css/welcome.css';
function welcome() {
    return (
        <div id="welcome" className="sec-pad welcome" style={ {backgroundImage: `url(${welcomebg})` }}>
            <div className="wrapper we-text-center welcome-cover">
                <div className="welcome-inner">
                    <h2>Welcome</h2>
                    <h1>The Best Coffee Testing Experience</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="welcome-btn">
                        <a href="home.html" className="btn1">Order Now</a>
                        <a href="home.html" className="btn2">View Menu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default welcome;