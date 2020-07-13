import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import superfish from "superfish";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }

  componentDidMount() {
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

            $(document).on('click', function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
	}
	
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });
  }
  
  render() {
    return (
		  <header id="header">
		    <div className="container main-menu">
		    	<div className="row align-items-center justify-content-between d-flex">
			      <div id="logo">
			        <Link to="/"><img src={this.state.base_url+"assets/img/logo.png"} alt="" title="" /></Link>
			      </div>
			      <nav id="nav-menu-container">
			        <ul className="nav-menu">
			          <li><Link className="hm-home" to="/">Home</Link></li>
			          <li><Link className="hm-about" to="/about">About</Link></li>
			          <li><Link className="hm-services" to="/services">Services</Link></li>
			          <li><Link className="hm-portfolio" to="/portfolio">Portfolio</Link></li>
			          <li><Link className="hm-pricing" to="/pricing">Pricing</Link></li>
			          <li className="menu-has-children"><Link className="hm-blog" to="#">Blog</Link>
			            <ul>
			              <li><Link className="hm-blog-home" to="/blog-home">Blog Home</Link></li>
			              <li><Link className="hm-blog-single" to="/blog-single">Blog Single</Link></li>
			            </ul>
			          </li>	
			          <li className="menu-has-children"><Link className="hm-pages" to="#">Pages</Link>
			            <ul>
		            	  <li><Link className="hm-elements" to="/elements">Elements</Link></li>
                    <li className="menu-has-children"><a href="">Level 2 </a>
                      <ul>
                        <li><a href="#">Item One</a></li>
                        <li><a href="#">Item Two</a></li>
                      </ul>
                    </li>					                		
			            </ul>
			          </li>					          					          		          
			          <li><Link className="hm-contact" to="/contact">Contact</Link></li>
			        </ul>
			      </nav>		    		
		    	</div>
		    </div>
		  </header>
    );
  }
}

export default Header;
