import React, { Component } from 'react';
import {  Route, Link, Switch, Redirect } from "react-router-dom";
import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap.bundle';

import NoMatch from './helpers/no-match';
import Scripts from './scripts/scripts';

import Header from './includes/header.jsx';
import Footer from './includes/footer.jsx';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Services from './pages/services.jsx';
import Portfolio from './pages/portfolio.jsx';
import Pricing from './pages/pricing.jsx';
import BlogHome from './pages/blogHome.jsx';
import BlogSingle from './pages/blogSingle.jsx';
import Elements from './pages/elements.jsx';
import Contact from './pages/contact.jsx';

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    }
  }

  render() {
    return [
        <Header key="header"
          base_url={this.state.base_url} 
          api_url={this.state.api_url} 
        />,
        <div key="content" id="content">
          <Switch>
              <Route exact path="/" render={(props) => 
                <Home {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/about" render={(props) => 
                <About {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/services" render={(props) => 
                <Services {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/portfolio" render={(props) => 
                <Portfolio {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/pricing" render={(props) => 
                <Pricing {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/blog-home" render={(props) => 
                <BlogHome {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/blog-single" render={(props) => 
                <BlogSingle {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/elements" render={(props) => 
                <Elements {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route exact path="/contact" render={(props) => 
                <Contact {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />} 
              />
              <Route render={(props) =>
                <NoMatch
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url} 
                />}
              />
          </Switch>
        </div>,
        <Footer key="footer"
          base_url={this.state.base_url} 
          api_url={this.state.api_url} 
        />,
        <Scripts key="scripts" base_url={this.state.base_url}  />
    ];
  }
}

export default Components;
