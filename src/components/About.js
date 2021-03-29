import React, { Component } from'react';
import './assets/css/About.css';
import aboutbg from './assets/images/about.jpg';
class About extends Component {
    render() {
        return( 
            <div className="about we-row">
                <div className="about-left we-col-6" style={ {backgroundImage: `url(${aboutbg})` }}></div>
                <div className="about-right we-col-6">
                    <div className="overlap">
                        <div className="about-heading">
                            <span className="subheading">{this.props.subtitle}</span>
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="about-content">
                            <p>{this.props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;
