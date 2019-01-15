import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from "mdbreact";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState(state => ({isOpen: !state.isOpen}));
    }

    render() {
        const image = this.props.image;
        const current = this.props.current;
        const version = this.props.version;

        return (
            <Navbar light expand="sm">
                <Link to="/">
                    <NavbarBrand>
                        <img src={`/images/${image ? image : 'logo.png'}`} alt="webinjaz io"/>
                        <span className="current">{current && current} <small>{version && version}</small></span>
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={() => this.toggle()} />
                <Collapse id="NC" isOpen={this.state.isOpen} navbar>
                    <NavbarNav right>
                        <NavItem>
                            <NavLink to="/build">Build Tools</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/list">Shapes</NavLink>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="https://webinjaz.gitbook.io/framework/guide/api">API</a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="https://webinjaz.gitbook.io/framework/guide">Guide</a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="https://webinjaz.gitbook.io/framework">Docs</a>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink to="/sign">Join</NavLink>
                        </NavItem> */}
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;