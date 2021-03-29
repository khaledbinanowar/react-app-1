import React, {Component} from 'react';
import './assets/css/Appointment.css';

class Appointment extends Component {
    render() {
        return(
            <div className="appointment">
                <h3>Book a Table</h3>
                <form action="#" className="appointment-form">
                    <div className="we-row">
                        <div className="form-group we-col-6">
                            <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="form-group we-col-6">
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="we-row">
                        <div className="form-group we-col-4">
                            <div className="input-wrap">
                                <div className="icon"><span className="ion-md-calendar"></span></div>
                                <input type="text" className="form-control appointment_date" placeholder="Date"/>
                            </div>
                        </div>
                        <div className="form-group we-col-4">
                            <div className="input-wrap">
                                <div className="icon"><span className="ion-ios-clock"></span></div>
                                <input type="text" className="form-control appointment_time ui-timepicker-input" placeholder="Time" autoComplete="off"/>
                            </div>
                        </div>
                        <div className="form-group we-col-4">
                            <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                    </div>
                    <div className="we-row">
                        <div className="form-group we-col-6">
                            <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group we-col-6">
                            <input type="submit" value="Appointment" className="appointment-btn"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Appointment;