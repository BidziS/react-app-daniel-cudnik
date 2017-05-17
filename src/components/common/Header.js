import React, {PropTypes} from 'react';
import {Link, IndexLink,browserHistory} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';




const Header = () => {

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><i className="fa fa-book" aria-hidden="true"></i>React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>

                    <NavItem eventKey={1} onClick={() => {browserHistory.push('/');}}>Link</NavItem>

                    <NavItem eventKey={2} onClick={() => {browserHistory.push('/about');}}>Link</NavItem>

                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};


export default Header;
