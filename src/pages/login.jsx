import React from "react";
import {
    Container,
    Image,
    Row,
    Col,
    InputGroup,
    Form,
    Button
    
} from 'react-bootstrap'
import { ILLUST_LOGIN } from '../asset'
import { Link } from 'react-router-dom'

class LoginPages extends React.Component {
    render() {
        return (
            <Container fluid className="bg-dark px-5 m-0" style={styles.container}>
                <Row style={styles.rowPadding}>
                    <Col style={styles.illLogin}>
                        <Image src={ILLUST_LOGIN} style={styles.imgIllust} />
                    </Col>
                    <Col style={styles.contLogin}>
                        <Row style={styles.formLogin}>
                            <Col lg={12} style={styles.Login}>Login</Col>
                            <Col lg={12}>
                                Username
                                <InputGroup className="mb-3">
                                    <Button variant="light" id="button-addon1" disabled="false">
                                    <i class="fa-solid fa-user"></i>
                                    </Button>
                                    <Form.Control
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                        type="email" placeholder="Username / Email"
                                    />
                                </InputGroup>
                                Password
                                <InputGroup className="mb-3">
                                    <Button variant="light" id="button-addon1" disabled="false">
                                    <i class="fa-solid fa-eye-slash"></i>
                                    </Button>
                                    <Form.Control
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                        type="password" placeholder="Password"
                                    />
                                </InputGroup>
                                <Button variant="outline-info">Login</Button>
                                <p className="py-3">
                                    Don't have an account yet ? 
                                    <Button variant="outline-info" as={Link} to="/register" style={styles.buttonSignUp}> Sign Up </Button>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#3f414f',
        height: '100vh'
    },
    illLogin: {
        display: 'flex',
        justifyContent: 'center',
        padding: '55px 0'
    },
    contLogin:{
        display: 'flex',
        justifyContent: 'center',
        alignItems :'center'
    },
    formLogin: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '450',
        padding : '35px 30px',
        color: 'white',
        backgroundColor: '#3f414f',
        width : '75%',
        height : '70%',
        border : '1px solid white',
        borderRadius : '10px'
    },
    imgIllust: {
        width: '50vw',
        padding: '0 80px'
    },
    Login: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '36px',
        fontWeight: '650',
    },
    buttonSignUp : {
        padding: '0 5px',
        margin : '0 5px',
        border : 'none'
    },
    rowPadding : {
        padding : '35px 0'
    }
}
export default LoginPages