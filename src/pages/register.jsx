import React, { useState } from "react";
// import Axios from "axios";
import {
    Container,
    Row,
    Col,
    InputGroup,
    Form,
    Button,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RegisterPage() {

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPw, setErrorConfirmPw] = useState(false)

    const onSign = () => {
        let username = document.getElementById('reg-username').value;
        let email = document.getElementById('reg-email').value;
        let password = document.getElementById('reg-password').value;
        let confirmPw = document.getElementById('reg-passwordConfirm').value

        if (!username && !email && !password && !confirmPw) {
            return (
                setErrorUsername(true), setErrorEmail(true), setErrorPassword(true), setErrorConfirmPw(true)
            )
        } else if (username && !email && !password && !confirmPw) {
            return (
                setErrorUsername(false), setErrorEmail(true), setErrorPassword(true), setErrorConfirmPw(true)
            )
        } else if (!username && email && !password && !confirmPw) {
            return (
                setErrorUsername(true), setErrorEmail(false), setErrorPassword(true), setErrorConfirmPw(true)
            )
        } else if (!username && !email && password && !confirmPw) {
            return (
                setErrorUsername(true), setErrorEmail(true), setErrorPassword(false), setErrorConfirmPw(true)
            )
        } else if (!username && !email && !password && confirmPw) {
            return (
                setErrorUsername(true), setErrorEmail(true), setErrorPassword(true), setErrorConfirmPw(true)
            )
            //////////////////////////
        } else if (username && email && !password && !confirmPw) {
            return (
                setErrorUsername(false), setErrorEmail(false), setErrorPassword(true), setErrorConfirmPw(true)
            )
        } else if (!username && email && password && !confirmPw) {
            return (
                setErrorUsername(true), setErrorEmail(false), setErrorPassword(false), setErrorConfirmPw(true)
            )
        } else if (!username && !email && password && confirmPw) {
            return (
                setErrorUsername(true), setErrorEmail(true), setErrorPassword(false), setErrorConfirmPw(false)
            )
            //////////////////////
        } else if (username && email && password && !confirmPw) {
            return (
                setErrorUsername(false), setErrorEmail(false), setErrorPassword(false), setErrorConfirmPw(true)
            )
        } else if (!username && email && password && confirmPw) {
            return (
                setErrorUsername(true), setErrorEmail(false), setErrorPassword(false), setErrorConfirmPw(false)
            )
        } else if (username && email && !password && confirmPw) {
            return (
                setErrorUsername(false), setErrorEmail(false), setErrorPassword(true), setErrorConfirmPw(false)
            )
            //////////////////////
        } else if (username && email && password && confirmPw) {
            return (
                setErrorUsername(false), setErrorEmail(false), setErrorPassword(false), setErrorConfirmPw(false)
            )
        } 
    }

    return (
        <Container fluid className="cont-bg">
            <Row className="container-general">
                <Col className="cont-register">
                    <Row className="form-login">
                        <Col lg={12} className="text-login">Create Account</Col>
                        <Col lg={12}>

                            {/* <Modal show={error} onHide={handleClose}>
                                <Modal.Body className="modal-body">Please fill all form !</Modal.Body>
                            </Modal> */}

                            <label className="mt-1">Username</label>
                            <InputGroup>
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i className="fa-solid fa-at"></i>
                                </Button>
                                <Form.Control type="email" placeholder="Input your username" id="reg-username" />
                            </InputGroup>
                            {errorUsername ? <p className="p-error">Please create your username !</p> : ''}


                            <label className="mt-1">Email</label>
                            <InputGroup>
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i className="fa-solid fa-envelope"></i>
                                </Button>
                                <Form.Control type="email" placeholder="Input your Email" id="reg-email" />
                            </InputGroup>
                            {errorEmail ? <p className="p-error">Please input your Email account !</p> : ''}

                            <label className="mt-1">Create Password</label>
                            <InputGroup>
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i className="fa-solid fa-key"></i>
                                </Button>
                                <Form.Control type="password" placeholder="Create your password" id="reg-password" />
                            </InputGroup>
                            {errorPassword ? <p className="p-error">Please create your password !</p> : ''}

                            <label className="mt-1">Confirm Password</label>
                            <InputGroup>
                                <Button variant="light" id="button-addon1" disabled="true">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </Button>
                                <Form.Control type="password" placeholder="Confirm your password" id="reg-passwordConfirm" />
                            </InputGroup>
                            {errorConfirmPw ? <p className="p-error">Please confirm your password account !</p> : ''}

                            <Button variant="outline-info" onClick={onSign} className="mt-2">Sign Up</Button>
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