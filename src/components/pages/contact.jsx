import React, { Component, Fragment } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import ActiveLinkIds from "../helpers/active-links";
import BasicMap from "../helpers/maps/basicMap";
import {
  PageBannerSection,
} from "./sections";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.location.pathname,
    };
  }

  render() {
    return (
      <Fragment>
        <PageBannerSection
          base_url={this.state.base_url}
          api_url={this.state.api_url}
          title={"Contact US"}
          url={"/contact"}
        />
        <section className="contact-page-area section-gap">
          <div className="container">
            <div className="row">
              <div className="map-wrap" style={{width: "100%", height: "445px"}} id="map">
                <BasicMap />
              </div>
              <div className="col-lg-4 d-flex flex-column address-wrap">
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-home"></span>
                  </div>
                  <div className="contact-details">
                    <h5>Binghamton, New York</h5>
                    <p>
                      4343 Hinkle Deegan Lake Road
                    </p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-phone-handset"></span>
                  </div>
                  <div className="contact-details">
                    <h5>00 (958) 9865 562</h5>
                    <p>Mon to Fri 9am to 6 pm</p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-envelope"></span>
                  </div>
                  <div className="contact-details">
                    <h5>support@colorlib.com</h5>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>														
              </div>
              <div className="col-lg-8">
                <form className="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
                  <div className="row">	
                    <div className="col-lg-6 form-group">
                      <input name="name" placeholder="Enter your name" className="common-input mb-20 form-control" required type="text" />
                    
                      <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="common-input mb-20 form-control" required type="email" />
  
                      <input name="subject" placeholder="Enter subject" className="common-input mb-20 form-control" required type="text" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <textarea className="common-textarea form-control" name="message" placeholder="Enter Messege"required></textarea>				
                    </div>
                    <div className="col-lg-12">
                      <div className="alert-msg" style={{textAlign: "left"}}></div>
                      <button className="genric-btn primary" style={{float: "right"}}>Send Message</button>											
                    </div>
                  </div>
                </form>	
              </div>
            </div>
          </div>	
        </section>
        <ActiveLinkIds pathname={this.state.path} />
      </Fragment>
    );
  }
}

export default Contact;
