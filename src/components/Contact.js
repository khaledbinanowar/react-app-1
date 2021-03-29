import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="info-item we-col-4 we-row">
                <div className="icon we-col-2">
                <i className={this.props.icon}></i>
                </div>
                <div className="text we-col-10">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}
export default Contact;