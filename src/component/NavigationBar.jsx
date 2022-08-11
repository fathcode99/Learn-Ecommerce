import React from "react";
import {
    Navbar,
    Nav,
    Container,
    Image

} from 'react-bootstrap'
import { LOGO } from '../asset'
import { Link } from 'react-router-dom'

import "./NavBar.css"

export default function NavigationBar() {
    return (
        <Navbar fixed="top" className="navbar-general m-0">
            <Container fluid className="px-5 px-5">
                <div className="container-menu">
                    <Navbar.Brand as={Link} to="/">
                        <Image src={LOGO} className="image" />
                    </Navbar.Brand>
                    <Nav>
                        <Nav className="navFont me-4" as={Link} to="/">Home</Nav>
                        <Nav className="navFont me-4" as={Link} to="/">Best Product</Nav>
                        <Nav className="navFont me-4" as={Link} to="/">Best Selling</Nav>
                    </Nav>
                </div>

                <div className="container-login">
                    <Nav className="me-auto navFont">
                        <Nav className="navFont me-4" as={Link} to="/register">Register</Nav>
                        <Nav className="navFont" as={Link} to="/Login">Login</Nav>
                    </Nav>

                    {/* <NavDropdown title="Login" id="collasible-nav-dropdown" style={styles.button}>
                            <NavDropdown.Item as={Link} to="/login">Profile</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
                        </NavDropdown> */}
                    <button className="button"><i class="fa-brands fa-shopify"></i></button>
                </div>
            </Container>
        </Navbar>
    )
}