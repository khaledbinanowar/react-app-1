import React from 'react';
import './assets/css/about.css';
import aboutbg from './assets/images/about.jpg';
function about() {
    return (
        <div className="about we-row">
            <div className="about-left we-col-6" style={ {backgroundImage: `url(${aboutbg})` }}></div>
            <div className="about-right we-col-6">
                <div className="overlap">
                    <div className="about-heading">
                        <span className="subheading">Discover</span>
                        <h2>Our Story</h2>
                    </div>
                    <div className="about-content">
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default about;
