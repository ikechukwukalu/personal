import React, { Component } from 'react'; 
import {Helmet} from "react-helmet"; 
import $ from "jquery";

class Scripts extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          base_url: this.props.base_url,
          api_url: this.props.api_url
        }
    }

    componentWillUnmount() {
      $("head").find('script').remove(); 
    }
    
    render() { 
        return ( 
            <Helmet> 
                <script src={this.state.base_url+'assets/js/vendors.js'}></script> 
            </Helmet> 
        ); 
    } 
} 
export default Scripts;