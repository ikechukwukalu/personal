import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
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
