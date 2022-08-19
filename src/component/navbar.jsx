import React from "react";
import {
    Col,
    Container, Nav, Row
} from 'react-bootstrap'

import './component.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar-main-container p-0">
            <Container className="navbar-style p-0">
                <Row >
                    <Col lg={4} className="nav-brand-style">BRANDNAME</Col>
                    <Col lg={8} className="nav-menu-style">
                        <Nav className="nav-text-menu" as={Link} to="/">HOME</Nav>
                        <div>SHOP</div>
                        <div>PRODUCTS</div>
                        <div>ABOUT US</div>
                        <div>CONTACT US</div>
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}