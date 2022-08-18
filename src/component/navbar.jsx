import React from "react";
import {
    Col,
    Container, Row
} from 'react-bootstrap'

import './component.css'

export default function Navbar() {
    return (
        <div className="navbar-main-container">
            <Container className="navbar-style">
                <Row >
                    <Col lg={4} className="nav-brand-style">BRANDNAME</Col>
                    <Col lg={1}>HOME</Col>
                    <Col lg={1}>SHOP</Col>
                    <Col lg={1}>PRODUCTS</Col>
                    <Col lg={2}>ABOUT US</Col>
                    <Col lg={2}>CONTACT US</Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </div>
    )
}