import React, { Component } from 'react'
import "./Footer.css";

export default class Footer extends Component{
    render(){
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/*Column 1*/}
                        <div className="col">
                            <h4>Health Care Channeling</h4>
                            <ul className="list-unstyled">
                                <li>011-2345234</li>
                                <li>Colombo, SriLanka.</li>
                                <li>123 Main Street, Colombo.</li>
                            </ul>
                        </div>
                        {/*Column 2*/}
                        <div className="col">
                            <h4>Services</h4>
                            <ul className="list-unstyled">
                                <li>Channeling</li>
                                <li>Treatments</li>
                                <li>Surgeries</li>
                            </ul>
                        </div>
                        {/*Column 3*/}
                        <div className="col">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li><i class="fa fa-google" aria-hidden="true"></i>&nbsp;&nbsp;Google</li>
                                <li><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;Facebook</li>
                                <li><i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;&nbsp;Twitter</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Health-Care Channeling | All Rights Reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

