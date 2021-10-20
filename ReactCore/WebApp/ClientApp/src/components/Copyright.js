import React, { Component } from 'react';

export class Copyright extends Component {
    static displayName = Copyright.name;

    render() {
        return (
            <div id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <p className="text-center text-lg-left">&copy;2019 Rupai Inc.</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-center text-lg-right">Template design by <a href="#">dev.rupaisafi.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
