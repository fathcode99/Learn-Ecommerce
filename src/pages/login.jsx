import React, { useState } from "react";
import Axios from "axios";
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


export default function LoginPages() {
    const [visible, setVisible] = useState(true)
    const onVisible = () => {
        setVisible(!visible)
    }

    const [error, setError] = useState(false)
    const [errorLogin, setErrorLogin] = useState(false)
    const handleClose = () => setError(false);
    const handleCloseLogin = () => setErrorLogin(false);

    const onSign = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value

        if (!username || !password) {
            return setError(true)
        }

        Axios.get(`http://localhost:2000/user?username=${username}&password=${password}`)
        .then(res => {
            if(res.data.length===0) {
                return setErrorLogin(true)
            }
        })
    }

    return (
        <Container fluid className="cont-bg">
            <Modal show={error} onHide={handleClose}>
                <Modal.Body className="modal-body">Please fill all form !</Modal.Body>
            </Modal>
            <Modal show={errorLogin} onHide={handleCloseLogin}>
                <Modal.Body className="modal-body">This account is doesn't exist. Please register first !</Modal.Body>
            </Modal>

            <Row className="container-general">
                <Col className="cont-login">
                    <Row className="form-login">
                        <Col lg={12} className="text-login">Login</Col>
                        <Col lg={12}>
                            Username
                            <InputGroup className="mb-3">
                                <Button variant="light" id="button-addon1">
                                    <i class="fa-solid fa-user"></i>
                                </Button>
                                <Form.Control type="email" placeholder="Username / Email" id="username" />
                            </InputGroup>

                            Password
                            <InputGroup className="mb-3">
                                <Button variant="light" id="button-addon1" onChange={onVisible}>
                                    {visible ? <i class="fa-solid fa-key"></i> : <i class="fa-solid fa-user"></i>}
                                </Button>

                                <Form.Control type="password" placeholder="Password" id="password" />
                            </InputGroup>

                            <Button variant="outline-info" onClick={onSign}>Login</Button>

                            <p className="text-ask py-3">
                                Don't have an account yet ?
                                <Nav as={Link} to="/register" className="btn-sign-up"> Sign Up </Nav>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}