import React, {Component} from 'react';
import welcomebg from './assets/images/bg_2.jpg';
import Button from '../components/Button';
import './assets/css/Welcome.css';
class Welcome extends Component {
    render() {
        return(
            <div id="welcome" className="sec-pad welcome" style={ {backgroundImage: `url(${welcomebg})` }}>
                <div className="wrapper we-text-center welcome-cover">
                    <div className="welcome-inner">
                        <h2>{this.props.subtitle}</h2>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.content}</p>
                        <div className="welcome-btn">
                            <Button buttonStyle='btn-fill' buttonSize='btn-large'>{this.props.btn1}</Button>
                            <Button buttonStyle='btn-clean' buttonSize='btn-large'>{this.props.btn2}</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Welcome;