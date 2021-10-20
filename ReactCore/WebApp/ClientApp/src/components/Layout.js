import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import { Copyright } from './Copyright';
import { Scripts } from './Scripts';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="Layout">
                <NavMenu />
                {this.props.children}
                <Footer />
                <Copyright />
            </div>
        );
    }
}
