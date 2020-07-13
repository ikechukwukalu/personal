import React, { Component, Fragment } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import ActiveLinkIds from "../helpers/active-links";
import { sweetAlert,sweetAlertHtml,toastAlert } from "../helpers/active-links";

import { AboutSection, ServicesSection, FactsSection, PortfolioSection, TestimonialsSection, PricingSection, BrandsSection } from "./sections";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.location.pathname
    };
  }

  render() {
    return (
      <Fragment>
        <section className="banner-area">
          <div className="container">
            <div className="row fullscreen align-items-center justify-content-between">
              <div className="col-lg-6 col-md-6 banner-left">
                <h6>This is me</h6>
                <h1>Philip Gilbert</h1>
                <p>
                  You will begin to realise why this exercise is called the
                  Dickens Pattern with reference to the ghost showing Scrooge
                  some different futures.
                </p>
                <a href="#" className="primary-btn text-uppercase">
                  discover now
                </a>
              </div>
              <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
                <img className="img-fluid" src={this.state.base_url+"assets/img/hero-img.png"} alt="" />
              </div>
            </div>
          </div>
        </section>
        <AboutSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <ServicesSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <FactsSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <PortfolioSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <TestimonialsSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <PricingSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <section className="recent-blog-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text">
                <h1>Latest posts from our blog</h1>
                <p>
                  You may be a skillful, effective employer but if you don’t
                  trust your personnel and the opposite, then the chances of
                  improving and expanding the business
                </p>
              </div>
            </div>
            <div className="row">
              <div className="single-recent-blog col-lg-4 col-md-4">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src={this.state.base_url+"assets/img/b1.jpg"}
                    alt=""
                  />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <img className="img-fluid" src={this.state.base_url+"assets/img/user.png"} alt="" />
                    <a href="#">
                      <span>Mark Wiens</span>
                    </a>
                  </div>
                  <div className="meta">
                    13th Dec
                    <span className="lnr lnr-heart"></span> 15
                    <span className="lnr lnr-bubble"></span> 04
                  </div>
                </div>
                <a href="#">
                  <h4>Break Through Self Doubt And Fear</h4>
                </a>
                <p>
                  Dream interpretation has many forms; it can be done be done
                  for the sake of fun, hobby or can be taken up as a serious
                  career.
                </p>
              </div>
              <div className="single-recent-blog col-lg-4 col-md-4">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src={this.state.base_url+"assets/img/b2.jpg"}
                    alt=""
                  />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <img className="img-fluid" src={this.state.base_url+"assets/img/user.png"} alt="" />
                    <a href="#">
                      <span>Mark Wiens</span>
                    </a>
                  </div>
                  <div className="meta">
                    13th Dec
                    <span className="lnr lnr-heart"></span> 15
                    <span className="lnr lnr-bubble"></span> 04
                  </div>
                </div>
                <a href="#">
                  <h4>Portable Fashion for young women</h4>
                </a>
                <p>
                  You may be a skillful, effective employer but if you don’t
                  trust your personnel and the opposite, then the chances of
                  improving.
                </p>
              </div>
              <div className="single-recent-blog col-lg-4 col-md-4">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src={this.state.base_url+"assets/img/b3.jpg"}
                    alt=""
                  />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <img className="img-fluid" src={this.state.base_url+"assets/img/user.png"} alt="" />
                    <a href="#">
                      <span>Mark Wiens</span>
                    </a>
                  </div>
                  <div className="meta">
                    13th Dec
                    <span className="lnr lnr-heart"></span> 15
                    <span className="lnr lnr-bubble"></span> 04
                  </div>
                </div>
                <a href="#">
                  <h4>Do Dreams Serve As A Premonition</h4>
                </a>
                <p>
                  So many of us are demotivated to achieve anything. Such people
                  are not enthusiastic about anything. They don’t want to work
                  involved.
                </p>
              </div>
            </div>
          </div>
        </section>
        <BrandsSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <ActiveLinkIds pathname={this.state.path} />
      </Fragment>
    );
  }
}

export default Home;
