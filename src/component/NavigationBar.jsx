import React from "react";
import { useSelector, useDispatch } from "react-redux"
import {
    Navbar,
    Nav,
    Container,
    Image,
    NavDropdown
} from 'react-bootstrap'
import { LOGO } from '../asset'
import { Link } from 'react-router-dom'


import "./NavBar.css"

export default function NavigationBar() {
    const state = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    const onLogOut = () => {
        localStorage.removeItem('idUser')
        dispatch({
            type: "LOGOUT"
        })
    }

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
                    {state.username ?
                        <NavDropdown title={state.username} id="collasible-nav-dropdown" className="navFont">
                            <NavDropdown.Item as={Link} to="/login">Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={onLogOut} as={Link} to="/">Logout</NavDropdown.Item>
                        </NavDropdown>
                        :
                        <Nav className="me-auto navFont">
                            <Nav className="navFont me-4" as={Link} to="/register">Register</Nav>
                            <Nav className="navFont" as={Link} to="/login">Login</Nav>
                        </Nav>
                    }


                    <button className="button"><i className="fa-brands fa-shopify"></i></button>
                </div>
            </Container>
        </Navbar>
    )
}