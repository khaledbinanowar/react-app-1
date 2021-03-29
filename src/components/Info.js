import React, { Component } from'react';
import './assets/css/Info.css';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
class Info extends Component {
    render() {
        return(
            <div className="info">
                <div className="we-row wrapper">
                    <div className="we-row">
                        <div className="we-col-8 we-row">
                            <Contact
                                icon="fas fa-phone"
                                title="000 (123) 456 7890"
                                content="A small river named Duden flows by their place and supplies."
                            />
                            <Contact
                                icon="fas fa-map-marker-alt"
                                title="198 West 21th Street"
                                content="203 Fake St. Mountain View, San Francisco, California, USA"
                            />
                            <Contact
                                icon="far fa-clock"
                                title="Open Monday-Friday"
                                content="A small river named Duden flows by their place and supplies."
                            />
                        </div>
                        <Appointment />
                    </div>
                </div>
            </div>
        )
    }
}
export default Info;