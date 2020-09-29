import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Covid-19 Statistics</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/world">World Statistics</Link>
                    <Link className="nav-link" to="/india">India Statistics</Link>
                    <Link className="nav-link" to="/state">State Wise Statistics</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;