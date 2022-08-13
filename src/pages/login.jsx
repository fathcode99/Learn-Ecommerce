import React, { useState } from "react";
import Axios from "axios";
import {
    Container,
    Row,
    Col,
    Modal,
    Nav
} from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function LoginPages() {
    const state = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    // Authentication
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    // const [errorLogin, setErrorLogin] = useState(false)
    const handleCloseLogin = () => {
        dispatch({
            type: "HANDLE_CLOSE"
        })
    }


    // const handleClose = () => setError(false);

    const onSign = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value

        if (!username && !password) {
            return (setErrorPassword(true), setErrorUsername(true))
        } else if (!username && password) {
            return (setErrorPassword(false), setErrorUsername(true))
        } else if (username && !password) {
            return (setErrorPassword(true), setErrorUsername(false))
        }

        Axios.get(`http://localhost:2000/user?username=${username}&password=${password}`)
            .then(res => {
                if (res.data.length === 0) {
                    dispatch({
                        type: "ERROR_LOGIN"
                    })
                } else {
                    localStorage.setItem('idUser', res.data[0].id)
                    dispatch({
                        type: "LOGIN",
                        payload: res.data[0]
                    })
                }
                console.log(res.data)
            })
    }

    if (state.username) {
        return (<Navigate to="/" />)
    }
    return (
        <div>

            <Container fluid className="cont-bg">

                <Modal show={state.errorLogin} onHide={handleCloseLogin}>
                    <Modal.Body className="modal-body">This account is doesn't exist. Please Sign Up first !</Modal.Body>
                </Modal>

                <Row className="container-general">
                    <Col className="cont-login">
                        <Row className="form-login">
                            <Col lg={12} className="text-login">Hello, welcome back !</Col>
                            <Col lg={12} className="input-box">
                                <div className="input-box-1">
                                    <label className="mt-0 fs-6">Username {errorUsername ? <b className="p-error"> Please input your Username !</b> : ''}</label> 
                                    <input className="input-style" type="text" placeholder="Username" id="username" />
                                </div>
                                
                                <div className="input-box-1 mt-1">
                                    <label className="mt-0 fs-6">Password {errorPassword ? <b className="p-error"> Please input your Password !</b> : ''}</label>  
                                    <input className="input-style" type="password" placeholder="Username" id="password" />
                                </div>

                                <button className="btn-style mt-4" onClick={onSign}>Login</button>

                                <p className="text-ask py-3">
                                    Don't have an account yet ?
                                    <Nav as={Link} to="/register" className="btn-sign-up"> Sign Up </Nav>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}