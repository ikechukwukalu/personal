import React, { Component, Fragment } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import ActiveLinkIds from "../helpers/active-links";
import Scripts from "../scripts/scripts";
import { AboutSection, TestimonialsSection, BrandsSection, PageBannerSection } from "./sections";

class About extends Component {
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
        <PageBannerSection base_url={this.state.base_url} api_url={this.state.api_url} title={"About Me"} url={"/about"}  />
        <AboutSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <section className="home-about-area">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-12 pt-60">
                        <p>
                            It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned. The history of video game is as interesting as a fairy tale. 
                        </p>
                        <p>
                            The quality of today’s video game was not at all there when video game first conceptualized and played ever. During the formulative years, video games were created by using various interactive electronic devices with various display formats. The first ever video game was designed in 1947 by Thomas T. Goldsmith Jr. 								
                        </p>
                        <h4 className="pt-30">Tools Expertness</h4>	
                    </div>
                </div>
                <div className="row skillbar-wraps">					
                    <div className="col-lg-6 skill-left">
                        <div className="single-skill">
                            <p>
                                After Effects 85%
                            </p>
                            <div className="skill" data-width="85"></div>
                        </div>
                        <div className="single-skill">
                            <p>
                                Photoshop 90%
                            </p>
                            <div className="skill" data-width="90"></div>
                        </div>
                        <div className="single-skill">
                            <p>
                                Illustrator 70%
                            </p>
                            <div className="skill" data-width="70"></div>
                        </div>																				
                    </div>
                    <div className="col-lg-6 skill-right">
                        <div className="single-skill">
                            <p>
                                Sublime 95%
                            </p>
                            <div className="skill" data-width="95"></div>
                        </div>								
                        <div className="single-skill">
                            <p>
                                Sketch 85%
                            </p>
                            <div className="skill" data-width="85"></div>
                        </div>
                        
                    </div>
                </div>
            </div>	
        </section>
        <section className="timeline pb-120">
            <div className="text-center">
                <div className="menu-content pb-70">
                    <div className="title text-center">
                        <h1 className="mb-10">My Qualifications</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                </div>
            </div>				
            <ul>
                <li>
                    <div className="content">
                    <h4>
                        <time>Masters in Graphics & Fine Arts</time>
                    </h4>
                    <p><b>Session:</b> 2010-11</p>
                    <p><b>Result:</b> 3.78 (In the Scale of 4.00)</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                    <img className="img-fluid mx-auto d-block mb-30" src="img/about/c-logo.png" alt="" />
                    <h4>
                        <time>Creative Content Developer</time>
                    </h4>
                    <p>July 2015 to Present</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                    <h4>
                        <time>Bachelor in Graphics & UI/UX</time>
                    </h4>
                    <p><b>Session:</b> 2006-09</p>
                    <p><b>Result:</b> 3.40 (In the Scale of 4.00)</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                    <img className="img-fluid mx-auto d-block mb-30" src="img/about/c-logo.png" alt="" />
                    <h4>
                        <time>Senior UI/UX Designer</time>
                    </h4>
                    <p>July 2015 to Present</p>
                    </div>
                </li>
                <li>
                    <div className="content">
                    <h4>
                        <time>Diploma in Fine Arts & Printing</time>
                    </h4>
                    <p><b>Session:</b> 2003-06</p>
                    <p><b>Result:</b> 4.94 (In the Scale of 5.00)</p>
                    </div>
                </li>
            </ul>
        </section>
        <TestimonialsSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <BrandsSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <ActiveLinkIds pathname={this.state.path} />
        {/* <Scripts base_url={this.state.base_url}  /> */}
      </Fragment>
    );
  }
}

export default About;
