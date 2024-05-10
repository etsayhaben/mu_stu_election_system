import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../images/voteLogo.jpg'; // Import your logo image

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            {/* Logo */}
            <Navbar.Brand href="/">
                <img
                    src={logo} // Use the imported logo image
                    width="100"
                    height="80"
                    className="d-inline-block align-top"
                    alt="Online Election System Logo"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/apply">Apply</Nav.Link>
                    <Nav.Link href="/vote">Vote</Nav.Link>
                    <Nav.Link href="/view-result">View Result</Nav.Link>
                </Nav>
                <Form inline>
                    <div className="d-flex">
                        <FormControl type="text" placeholder="Search" size="sm" className="mr-sm-2" />
                        <Button variant="outline-success" size="sm">Search</Button>
                    </div>
                </Form>
                <Nav>
                    <Nav.Link href="/login">login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
