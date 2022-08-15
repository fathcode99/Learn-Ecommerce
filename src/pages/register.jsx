import React, { useState } from "react";
// import Axios from "axios";
import {
    Container,
    Row,
    Col,
    Nav,
    Modal
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RegisterPage() {

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPw, setErrorConfirmPw] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const handleClose = () => setSignUp(false);

    // username : minimal 6 karakter dan tidak ada symbol
    // email : harus valid
    // password : minimal 6 karakter harus ada angka sama symbol

    const onSign = () => {
        console.log(errorUsername, errorEmail, errorPassword, errorConfirmPw)
        if ( errorUsername  ||  errorEmail ||  errorPassword|| errorConfirmPw )
            return setSignUp(true)
        alert ('success')

    }

    const userValid = (e) => {
        // console.log(e.target.value)
        let symb = /[~`!@#$%^&*()-+=]/
        if (symb.test(e.target.value) || e.target.value.length < 6)
            return setErrorUsername(true)
        setErrorUsername(false)

        let username = document.getElementById("reg-username").value
        if (!username) return setSignUp(true)
    }

    const emailValid = (e) => {
        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regexEmail.test(e.target.value))
            return setErrorEmail(true)
        setErrorEmail(false)
    }

    const passValid = (e) => {
        let symb = /[~`!@#$%^&*()-+=]/
        let number = /[0-9]/
        if (!symb.test(e.target.value) || !number.test(e.target.value) || e.target.value.length < 8)
            return setErrorPassword(true)
        setErrorPassword(false)
    }

    const confirmPw = (e) => {
        let password = document.getElementById('reg-password').value;
        let confirmPw = document.getElementById('reg-passwordConfirm').value
        if (password !== confirmPw)
            return setErrorConfirmPw(true)
        setErrorConfirmPw(false)
    }

    return (
        <Container fluid className="cont-bg">
            <Row className="container-general">
                <Col className="cont-register">
                    <Row className="form-login">
                        <Col lg={12} className="text-login">Create Account</Col>
                        <Col lg={12} className="input-box">

                            <Modal show={signUp} onHide={handleClose}>
                                <Modal.Body className="modal-body">Please make sure all data is filled in and valid !</Modal.Body>
                            </Modal>

                            <div className="input-box-1 mt-1">
                                <label className="label-style m-0 fs-6">Username </label>
                                <input className="input-style p-0" type="email" placeholder="Create Username" id="reg-username" onChange={(e) => userValid(e)} />
                                {errorUsername ? <b className="p-error">Username min 6 character and without symbol</b> : ''}
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="label-style m-0 fs-6">Email </label>
                                <input className="input-style p-0" type="email" placeholder="Input your email" id="reg-email" onChange={(e) => emailValid(e)} />
                                {errorEmail ? <b className="p-error">Please input your valid email</b> : ''}
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="label-style m-0 fs-6">Create Password  </label>
                                <input className="input-style p-0" type="password" placeholder="Create your password" id="reg-password" onChange={(e) => passValid(e)} />
                                {errorPassword ? <b className="p-error">Please include alphabet, symbol, and numeric</b> : ''}
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="label-style m-0 fs-6">Confirm Password </label>
                                <input className="input-style p-0" type="password" placeholder="Confirm your password" id="reg-passwordConfirm" onChange={(e) => confirmPw(e)} />
                                {errorConfirmPw ? <b className="p-error">Your confirm password doesn't match</b> : ''}
                            </div>

                            <button className="btn-style mt-4" onClick={onSign} >Sign Up</button>
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