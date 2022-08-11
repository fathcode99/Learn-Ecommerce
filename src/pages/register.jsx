import React, { useState } from "react";
// import Axios from "axios";
import {
    Container,
    Row,
    Col,
    InputGroup,
    Form,
    Button,
    Modal,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    const [error, setError] = useState(false)
    const handleClose = () => setError(false);

    const onSign = () => {
        let username = document.getElementById('reg-username').value;
        let email = document.getElementById('reg-email').value;
        let password = document.getElementById('reg-password').value;
        let confirmPw = document.getElementById('reg-passwordConfirm').value

        if (!username || !email || !password || !confirmPw) {
            return setError(true)
        }

    }
    return (
        <Container fluid className="cont-bg">
            <Row className="container-general">
                <Col className="cont-register">
                    <Row className="form-login">
                        <Col lg={12} className="text-login">Create Account</Col>
                        <Col lg={12}>

                            <Modal show={error} onHide={handleClose}>
                                <Modal.Body className="modal-body">Please fill all form !</Modal.Body>
                            </Modal>

                            Username
                            <InputGroup className="mb-3">
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i class="fa-solid fa-at"></i>
                                </Button>
                                <Form.Control type="email" placeholder="Input your username" id="reg-username" />

                            </InputGroup>



                            Email
                            <InputGroup className="mb-3">
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i class="fa-solid fa-envelope"></i>
                                </Button>
                                <Form.Control type="email" placeholder="Input your Email" id="reg-email" />
                            </InputGroup>

                            Password
                            <InputGroup className="mb-3">
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i class="fa-solid fa-key"></i>
                                </Button>
                                <Form.Control type="password" placeholder="Create your password" id="reg-password" />
                            </InputGroup>

                            Confirm Password
                            <InputGroup className="mb-3">
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i class="fa-solid fa-shield-halved"></i>
                                </Button>
                                <Form.Control type="password" placeholder="Confirm your password" id="reg-passwordConfirm" />
                            </InputGroup>

                            <Button variant="outline-info" onClick={onSign}>Sign Up</Button>
                            <p className="text-ask py-3">
                                Have an account yet ?
                                <Nav as={Link} to="/login" className="btn-sign-up"> Login </Nav>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </Container>
    )
}