import React, { Component, Fragment } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import ActiveLinkIds from "../helpers/active-links";
import { PricingSection, PageBannerSection } from "./sections";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.location.pathname
    };
  }

  componentDidMount() {
    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion").each(function() {
        $(this).find("dt > a").first().addClass("active").parent().next().css({
            display: "block"
        });
    });
  }

  render() {
    return (
      <Fragment>
        <PageBannerSection base_url={this.state.base_url} api_url={this.state.api_url} title={"Pricing Plan"} url={"/pricing"}  />
        <PricingSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <section className="faq-area pb-120">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-70 col-lg-8">
                        <div className="title text-center">
                            <h1 className="mb-10">Frequently Asked Questions</h1>
                            <p>When someone does something that they know that they shouldn’t do, did they really have a choice. Maybe what I mean to say is did they really have a chance. You can take two people.</p>
                        </div>
                    </div>
                </div>						
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                    <dl className="accordion">
                        <dt>
                            <a href="">Dude You Re Getting A Telescope</a>
                        </dt>
                        <dd>
                        Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam.
                        </dd>
                        <dt>
                            <a href="">The Basics Of Buying A Telescope</a>
                        </dt>
                        <dd>
                        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. leo quam aliquet diam, congue laoreet elit metus eget diam.
                        </dd>
                        <dt>
                            <a href="">Astronomy Binoculars A Great Alternative</a>
                        </dt>
                        <dd>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.
                        </dd>
                        <dt>
                            <a href="">Do Your Self Realizations Quickly Fade</a>
                        </dt>
                        <dd>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.
                        </dd>
                        <dt>
                            <a href="">Success Steps For Your Personal Or Business Life</a>
                        </dt>
                        <dd>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.
                        </dd>
                    </dl>
    
                    </div>
                </div>
            </div>	
        </section>
        <ActiveLinkIds pathname={this.state.path} />
      </Fragment>
    );
  }
}

export default Pricing;
