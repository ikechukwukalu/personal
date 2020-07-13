import React, { Component } from 'react';
import {  Route, Link, Switch, Redirect } from "react-router-dom";
import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap.bundle';

import NoMatch from './helpers/no-match';

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

  componentDidMount() {
    $(document).ready(function() {

        // $('html, body').hide();

        // if (window.location.hash) {

        //     setTimeout(function() {

        //         $('html, body').scrollTop(0).show();

        //         $('html, body').animate({

        //             scrollTop: $(window.location.hash).offset().top - 108

        //         }, 1000)

        //     }, 0);

        // } else {

        //     $('html, body').show();

        // }
        
        // Get current path and find target link
        var path = window.location.pathname.split("/").pop();

        // Account for home page with empty path
        if (path == '') {
            path = 'index.html';
        }

        var target = $('nav a[href="' + path + '"]');
        // Add active class to target link
        target.addClass('menu-active');
        
        if ($('.menu-has-children ul>li a').hasClass('menu-active')) {
            $('.menu-active').closest("ul").parentsUntil("a").addClass('parent-active');
        }
    });
    $(document).on('click', '.accordion > dt > a', function(e) {

        var current = $(this).parent().next("dd");
        $(this).parents(".accordion").find("dt > a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");

        return false;

    });
    $(window).scroll( function(){
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
        /* Check the location of each element hidden */
        $('.hidden').each( function(i){
          
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'},700);
            }
        });
    });
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
        />
    ];
  }
}

export default Components;
