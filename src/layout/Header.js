import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <Link to="/">
                <img src="images/logo.png" alt="webinjaz io"/>
                <span className="current">{props.current && props.current} <small>{props.version && props.version}</small></span>
            </Link> 
            <div className="nav-right">
                <Link to="/build">Build Tool</Link>
                <a href="https://webinjaz.gitbook.io/framework">Docs</a>
            </div>
        </header>
    )
}

export default Header;