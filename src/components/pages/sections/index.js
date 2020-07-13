import React, { Component, Fragment } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import OwlCarousel from 'react-owl-carousel';
import 'waypoints/lib/jquery.waypoints';
import 'jquery.counterup';
import magnificPopup from 'magnific-popup';


// ABOUT ME SECTION
export class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    };
  }

  render() {
    return (
      <Fragment>
        <section className="home-about-area pt-120">
            <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-md-6 home-about-left">
                <img className="img-fluid" src={this.state.base_url+"assets/img/about-img.png"} alt="" />
                </div>
                <div className="col-lg-5 col-md-6 home-about-right">
                <h6>About Me</h6>
                <h1 className="text-uppercase">Personal Details</h1>
                <p>
                    Here, I focus on a range of items and features that we use in
                    life without giving them a second thought. such as Coca Cola.
                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco.
                </p>
                <a href="#" className="primary-btn text-uppercase">
                    View Full Details
                </a>
                </div>
            </div>
            </div>
        </section>
      </Fragment>
    );
  }
}

// OUR SERVICES SECTION
export class ServicesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    };
  }

  render() {
    return (
      <Fragment>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content  col-lg-7">
                <div className="title text-center">
                  <h1 className="mb-10">My Offered Services</h1>
                  <p>
                    At about this time of year, some months after New Year’s
                    resolutions have been made and kept, or made and neglected.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-pie-chart"></span>
                  <a href="#">
                    <h4>Web Design</h4>
                  </a>
                  <p>
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-laptop-phone"></span>
                  <a href="#">
                    <h4>Web Development</h4>
                  </a>
                  <p>
                    If you are an entrepreneur, you know that your success
                    cannot depend on the opinions of others. Like the wind,
                    opinions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-camera"></span>
                  <a href="#">
                    <h4>Photography</h4>
                  </a>
                  <p>
                    Do you want to be even more successful? Learn to love
                    learning and growth. The more effort you put into improving
                    your skills.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-picture"></span>
                  <a href="#">
                    <h4>Clipping Path</h4>
                  </a>
                  <p>
                    Hypnosis quit smoking methods maintain caused quite a stir
                    in the medical world over the last two decades. There is a
                    lot of argument.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-tablet"></span>
                  <a href="#">
                    <h4>Apps Interface</h4>
                  </a>
                  <p>
                    Do you sometimes have the feeling that you’re running into
                    the same obstacles over and over again? Many of my
                    conflicts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-rocket"></span>
                  <a href="#">
                    <h4>Graphic Design</h4>
                  </a>
                  <p>
                    You’ve heard the expression, “Just believe it and it will
                    come.” Well, technically, that is true, however, ‘believing’
                    is not just thinking that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// FACTS SECTION
export class FactsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    };
  }

  componentDidMount() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  }

  render() {
    return (
      <Fragment>
        <section className="facts-area section-gap" id="facts-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">2536</h1>
                <p>Projects Completed</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">6784</h1>
                <p>Happy Clients</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">2239</h1>
                <p>Cups of Coffee</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">435</h1>
                <p>Real Professionals</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// PORTFOLIO SECTION
export class PortfolioSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      isotope: null
    };
  }

  componentDidMount() { 
    if($("#portfolio")){
      var grid = document.querySelector('.grid');
      imagesLoaded( grid, () => {
        var iso = new Isotope( grid, {
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
              columnWidth: ".all"
            },
            initLayout: true
        });
        $('.filters ul li').click(function() {
          $('.filters ul li').removeClass('active');
          $(this).addClass('active');
          var data = $(this).attr('data-filter');
          iso.arrange({
            filter: data // All grid items
          });
        });
      });
    };
    
    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      }
    });
  }

  render() {
    return (
      <Fragment>
        <section className="portfolio-area section-gap" id="portfolio">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Our Latest Featured Projects</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>

            <div className="filters">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".vector">Vector</li>
                <li data-filter=".raster">Raster</li>
                <li data-filter=".ui">UI/UX</li>
                <li data-filter=".printing">Printing</li>
              </ul>
            </div>

            <div className="filters-content">
              <div className="row grid">
                <div className="single-portfolio col-sm-4 all vector">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="image img-fluid"
                        src={this.state.base_url+"assets/img/p1.jpg"}
                        alt=""
                      />
                    </div>
                    <a href={this.state.base_url+"assets/img/p1.jpg"} className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={this.state.base_url+"assets/img/preview.png"} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all raster">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="image img-fluid"
                        src={this.state.base_url+"assets/img/p2.jpg"}
                        alt=""
                      />
                    </div>
                    <a href={this.state.base_url+"assets/img/p2.jpg"} className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={this.state.base_url+"assets/img/preview.png"} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all ui">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="image img-fluid"
                        src={this.state.base_url+"assets/img/p3.jpg"}
                        alt=""
                      />
                    </div>
                    <a href={this.state.base_url+"assets/img/p3.jpg"} className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={this.state.base_url+"assets/img/preview.png"} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Creative Poster Design</h4>
                    <div className="cat">Agency</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all printing">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="image img-fluid"
                        src={this.state.base_url+"assets/img/p4.jpg"}
                        alt=""
                      />
                    </div>
                    <a href={this.state.base_url+"assets/img/p4.jpg"} className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={this.state.base_url+"assets/img/preview.png"} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Embosed Logo Design</h4>
                    <div className="cat">Portal</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all vector">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="image img-fluid"
                        src={this.state.base_url+"assets/img/p5.jpg"}
                        alt=""
                      />
                    </div>
                    <a href={this.state.base_url+"assets/img/p5.jpg"} className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={this.state.base_url+"assets/img/preview.png"} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>3D Helmet Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all raster">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="image img-fluid"
                        src={this.state.base_url+"assets/img/p6.jpg"}
                        alt=""
                      />
                    </div>
                    <a href={this.state.base_url+"assets/img/p6.jpg"} className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={this.state.base_url+"assets/img/preview.png"} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">raster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// TESTIMONIALS SECTION
export class TestimonialsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    };
  }

  navText = () => {
    return [  
      <span key={'1_1'} class='lnr lnr-arrow-up'></span>, 
      <span key={'2_2'} class='lnr lnr-arrow-down'></span>
    ];
  }

  render() {
    return (
      <Fragment>
        <section className="testimonial-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Client’s Feedback About Me</h1>
                  <p>
                    It is very easy to start smoking but it is an uphill task to
                    quit it. Ask any chain smoker or even a person.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
                <OwlCarousel
                    className="active-testimonial"
                    items={2}
                    loop
                    margin={30}
                    autoplayHoverPause
                    dots
                    autoplay
                    nav
                    navText={this.navText}
                    responsive={{
                        0: {
                            items: 1
                        },
                        480: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        }
                    }}
                >
                  <div className="single-testimonial item d-flex flex-row">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src={this.state.base_url+"assets/img/elements/user1.png"}
                        alt=""
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h4>Harriet Maxwell</h4>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div className="single-testimonial item d-flex flex-row">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src={this.state.base_url+"assets/img/elements/user2.png"}
                        alt=""
                      />
                    </div>
                    <div className="desc">
                      <p>
                        A purpose is the eternal condition for success. Every
                        former smoker can tell you just how hard it is to stop
                        smoking cigarettes. However.
                      </p>
                      <h4>Carolyn Craig</h4>
                      <p>CEO at Facebook</p>
                    </div>
                  </div>
                </OwlCarousel>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// PRICINGS SECTION
export class PricingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    };
  }

  render() {
    return (
      <Fragment>
        <section className="price-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Choose Your Plan</h1>
                  <p>
                    When someone does something that they know that they
                    shouldn’t do, did they.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">01</h1>
                  <h4>Economy</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£199.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">02</h1>
                  <h4>Business</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£299.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">03</h1>
                  <h4>Premium</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£399.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">04</h1>
                  <h4>Exclusive</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£499.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// BRANDS SECTION
export class BrandsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    };
  }

  render() {
    return (
      <Fragment>
        <section className="brands-area">
          <div className="container">
            <div className="brand-wrap">
              <OwlCarousel
                className="row align-items-center active-brand-carusel justify-content-start no-gutters"
                items={5}
                loop
                autoplayHoverPause
                autoplay
                responsive={{
                    0: {
                        items: 1
                    },
                    455: {
                        items: 2
                    },            
                    768: {
                        items: 3,
                    },
                    991: {
                        items: 4,
                    },
                    1024: {
                        items: 5,
                    }
                }}
              >
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={this.state.base_url+"assets/img/l1.png"} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={this.state.base_url+"assets/img/l2.png"} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={this.state.base_url+"assets/img/l3.png"} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={this.state.base_url+"assets/img/l4.png"} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={this.state.base_url+"assets/img/l5.png"} alt="" />
                  </a>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// PAGE BANNER SECTION
export class PageBannerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      title: this.props.title,
      url: this.props.url
    };
  }

  render() {
    return (
      <Fragment>
        <section className="about-banner">
          <div className="container">				
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">
                  {this.state.title}
                </h1>	
                <p className="text-white link-nav"><Link to="/">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to={this.state.url}> {this.state.title}</Link></p>
              </div>	
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}