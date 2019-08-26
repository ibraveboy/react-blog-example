import React, {Component } from 'react';
class Services extends Component{
    render(){
        return(
            <section className="section services">
            <div className="services-title">
            <span className="heading">
            What we Offer?
            </span>

            <p>
                Here are some Services that we offer.
            </p>
            </div>

            <div className="services-group">
            <div className="services-item">
            <div className="icon-round">
                <i className="fab fa-html5"></i>
            </div>
            <div className="services-name">
                <h2>
                    HTML5
                </h2>
                <p>
                    Lorem Ipsum jsdk sdnjksdn dnkjsd sdnowdn wsdnskdn
                </p>
            </div>
            </div>


                        <div className="services-item">
            <div className="icon-round">
                <i className="fab fa-css3"></i>
            </div>
            <div className="services-name">
                <h2>
                    CSS3
                </h2>
                <p>
                    Lorem Ipsum jsdk sdnjksdn dnkjsd sdnowdn wsdnskdn
                </p>
            </div>
            </div>


                        <div className="services-item">
            <div className="icon-round">
                <i className="fab fa-js"></i>
            </div>
            <div className="services-name">
                <h2>
                    JavaScript
                </h2>
                <p>
                    Lorem Ipsum jsdk sdnjksdn dnkjsd sdnowdn wsdnskdn
                </p>
            </div>
            </div>
            </div>

            </section>
        )
    }
}

export default Services;