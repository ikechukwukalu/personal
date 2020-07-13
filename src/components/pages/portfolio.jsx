import React, { Component, Fragment } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import ActiveLinkIds from "../helpers/active-links";
import { PortfolioSection, PageBannerSection } from "./sections";

class Portfolio extends Component {
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
        <PageBannerSection base_url={this.state.base_url} api_url={this.state.api_url} title={"Portfolio"} url={"/portfolio"}  />
        <PortfolioSection base_url={this.state.base_url} api_url={this.state.api_url}  />
        <ActiveLinkIds pathname={this.state.path} />
      </Fragment>
    );
  }
}

export default Portfolio;
