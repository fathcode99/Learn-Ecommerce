import React, { useState } from "react";
import Axios from "axios";
import {
    Container,
    Row,
    Col,
    Nav,
    Modal
} from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux/es/exports";

export default function RegisterPage() {
    const state = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPw, setErrorConfirmPw] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const handleClose = () => setSignUp(false);

    //error or valid username dan email
    const [existUser, setExistUser] = useState(false)
    const [existEmail, setExistEmail] = useState(false)

    const onSign = () => {
        console.log(errorUsername, errorEmail, errorPassword, errorConfirmPw)
        if (errorUsername || errorEmail || errorPassword || errorConfirmPw || existUser || existEmail)
            return setSignUp(true)

        let username = document.getElementById("reg-username").value
        let email = document.getElementById("reg-email").value
        let password = document.getElementById("reg-password").value
        let confirmPw = document.getElementById("reg-confirmPw").value
        let role = 'user'

        if (!username || !email || !password || !confirmPw)
            return setSignUp(true)
            
        Axios.post('http://localhost:2000/user', {username, email, password, role})
        .then(res=> {
            console.log(res.data)
            dispatch({
                type : 'SUCCESS_REG'
            })
        })
    }

    const userValid = (e) => {
        // console.log(e.target.value)
        let symb = /[~`!@#$%^&*()-+=]/
        if (symb.test(e.target.value) || e.target.value.length < 6)
            return setErrorUsername(true)
        setErrorUsername(false)

        let username = document.getElementById("reg-username").value
        Axios.get(`http://localhost:2000/user?username=${username}`)
            .then(res => {
                if (res.data.length !== 0) {
                    setExistUser(true)
                } else {
                    setExistUser(false)
                }
            })
    }

    const emailValid = (e) => {
        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regexEmail.test(e.target.value))
            return setErrorEmail(true)
        setErrorEmail(false)

        let email = document.getElementById("reg-email").value
        Axios.get(`http://localhost:2000/user?email=${email}`)
            .then(res => {
                if (res.data.length !== 0) {
                    setExistEmail(true)
                } else {
                    setExistEmail(false)
                }
            })
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
        let confirmPw = document.getElementById('reg-confirmPw').value
        if (password !== confirmPw)
            return setErrorConfirmPw(true)
        setErrorConfirmPw(false)
    }

    if (state.successReg) {
        return (<Navigate to="/login" />)
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
                                {errorUsername ? <b className="p-error">
                                    Username min 6 character and without symbol</b>
                                    :
                                    existUser ? <b className="p-error">Username already exist</b> : ''
                                }

                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="label-style m-0 fs-6">Email </label>
                                <input className="input-style p-0" type="email" placeholder="Input your email" id="reg-email" onChange={(e) => emailValid(e)} />
                                {errorEmail ? <b className="p-error">Please input your valid email</b>
                                    :
                                    existEmail ? <b className="p-error">Email already exist</b> : ''
                                }
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="label-style m-0 fs-6">Create Password  </label>
                                <input className="input-style p-0" type="password" placeholder="Create your password" id="reg-password" onChange={(e) => passValid(e)} />
                                {errorPassword ? <b className="p-error">Please include alphabet, symbol, and numeric</b> : ''}
                            </div>

                            <div className="input-box-1 mt-1">
                                <label className="label-style m-0 fs-6">Confirm Password </label>
                                <input className="input-style p-0" type="password" placeholder="Confirm your password" id="reg-confirmPw" onChange={(e) => confirmPw(e)} />
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