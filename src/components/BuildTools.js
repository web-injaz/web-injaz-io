import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const BuildTools = props => {

    return (
        <div className="build-tools-picker">
            <Header current="Build Tool" version="v0.0.1(beta)" />
            <div className="container content">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/build/styler" className="styler">
                            <div className="jumbotron">
                                <img src="/images/styler.png" alt="styler" />
                                <h3>Styler</h3>
                                <p>Initialize your style with your colors and components.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/build/shaper" className="shaper">
                            <div className="jumbotron">
                                <img src="/images/shaper.png" alt="shaper" />
                                <h3>Shaper</h3>
                                <p>Build a shapes and save them online.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BuildTools;