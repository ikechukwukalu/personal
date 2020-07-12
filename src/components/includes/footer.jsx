import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }

  componentDidMount() {
    document.getElementById('fullYear').innerHTML = new Date().getFullYear();
  }
  
  render() {
    return (
      <footer id="footer" className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                    <h4>About Me</h4>
                    <p>
                        We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.
                    </p>
                    <p className="footer-text">
                        Copyright &copy;<span id="fullYear"></span>All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Newsletter</h4>
                  <p>Stay updated with our latest trends</p>
                  <div className="" id="mc_embed_signup">
                    <form target="_blank" action="" method="get">
                      <div className="input-group">
                        <input type="text" className="form-control" name="EMAIL" placeholder="Enter Email Address" required type="email" />
                        <div className="input-group-btn">
                          <button className="btn btn-default" type="submit">
                            <span className="lnr lnr-arrow-right"></span>
                          </button>    
                        </div>
                          <div className="info"></div>  
                      </div>
                    </form> 
                  </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                <div className="single-footer-widget">
                    <h4>Follow Me</h4>
                    <p>Let us be social</p>
                    <div className="footer-social d-flex align-items-center">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
