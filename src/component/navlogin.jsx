import React from "react";
import {
    Col,
    Container, Row
} from 'react-bootstrap'

import './component.css'

export default function NavLogin() {
    return (
        <div className="nav-top-main-container p-0">
            <Container>
                <Row>
                    <Col lg={2}><i className="fa-solid fa-phone px-2"></i> +123 456 789 00</Col>
                    <Col lg={7}></Col>
                    <Col lg={1}><i className="fa-solid fa-user px-2" ></i>Login</Col>
                    <Col lg={2}><i className="fa-solid fa-user-group px-2"></i>Register</Col>
                </Row>
            </Container>

        </div>
    )
}