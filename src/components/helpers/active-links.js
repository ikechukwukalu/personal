import React, { Component } from "react";
import $ from "jquery";
const LinkIds = {
    '/': ['home'],
    '/about': ['about'],
    '/services': ['services'],
    '/portfolio': ['portfolio'],
    '/pricing': ['pricing'],
    '/blog-home': ['blog', 'blog-home'],
    '/blog-single': ['blog', 'blog-single'],
    '/elements': ['pages', 'elements'],
    '/contact': ['contact']
};

export default class ActiveLinkIds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: this.props.pathname,
            active_links: LinkIds
        };
    }

    componentWillUnmount() {
        if (typeof this.state.active_links[this.state.path] == "object") {
            this.state.active_links[this.state.path].map(el => {
                $(".hm-" + el).removeClass("menu-active");
            });
        }
    }

    componentDidMount() {
        if (typeof this.state.active_links[this.state.path] == "object") {
            this.state.active_links[this.state.path].map(el => {
                $(".hm-" + el).addClass("menu-active");
            });
        }
    }

    render() {
        return null;
    }
}