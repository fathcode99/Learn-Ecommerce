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
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function LoginPages() {
    const state = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    const [visible, setVisible] = useState(true)
    const onVisible = () => {
        setVisible(!visible)
    }

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
        return( <Navigate to="/" />)
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
                            <Col lg={12}>
                                <label className="mt-2">Username</label>
                                <InputGroup >
                                    <Button variant="light" id="button-addon1">
                                        <i className="fa-solid fa-user"></i>
                                    </Button>
                                    <Form.Control type="email" placeholder="Username / Email" id="username" />
                                </InputGroup>
                                {errorUsername ? <p className="p-error">Please input your Email Account !</p> : ''}

                                <label className="mt-2">Password</label>
                                <InputGroup >
                                    <Button variant="light" id="button-addon1" onChange={onVisible}>
                                        {visible ? <i className="fa-solid fa-key"></i> : <i className="fa-solid fa-user"></i>}
                                    </Button>

                                    <Form.Control type="password" placeholder="Password" id="password" />
                                </InputGroup>
                                {errorPassword ? <p className="p-error">Please input your Password !</p> : ''}

                                <Button className="mt-4" variant="outline-info" onClick={onSign}>Login</Button>

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