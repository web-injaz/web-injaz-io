import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Link to="/credits">Credits</Link>
                    </div>
                    <div className="col-md-10">
                        Designing &amp; Programming by <img src="/images/logo.png" alt="web injaz" /> <a href="http://webinjaz.com">Web Injaz</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;