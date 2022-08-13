import React, { useState } from "react";
// import Axios from "axios";
import {
    Container,
    Row,
    Col,
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
                        <Col lg={12} className="input-box">

                            {/* <Modal show={error} onHide={handleClose}>
                                <Modal.Body className="modal-body">Please fill all form !</Modal.Body>
                            </Modal> */}

                            <div className="input-box-1 mt-1">
                                <label className="mt-0 fs-6">Username {errorUsername ? <b className="p-error">Please create your username !</b> : ''} </label>
                                <input className="input-style" type="email" placeholder="Create Username" id="reg-username" />
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="mt-0 fs-6">Email {errorEmail ? <b className="p-error">Please input your Email account !</b> : ''} </label>
                                <input className="input-style" type="email" placeholder="Input your email" id="reg-email" />
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="mt-0 fs-6">Create Password {errorPassword ? <b className="p-error">Please create your password !</b> : ''} </label>
                                <input className="input-style" type="email" placeholder="Create your password" id="reg-password" />
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="mt-0 fs-6">Confirm Password {errorConfirmPw ? <b className="p-error">Please confirm your password !</b> : ''} </label>
                                <input className="input-style" type="email" placeholder="Confirm your password" id="reg-passwordConfirm" />
                            </div>

                            <button className="btn-style mt-4" onClick={onSign}>Sign Up</button>
                            <p className="text-ask py-3">
                                Have an account ?
                                <Nav as={Link} to="/login" className="btn-sign-up"> Login </Nav>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}