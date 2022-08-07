import React from "react";
import {
    Navbar,
    Nav,
    Container,
    Image
    
} from 'react-bootstrap'
import { LOGO } from '../asset'
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar fixed="top" Navbar bg="dark" variant="dark" className="m-0">
                <Container fluid className="px-5 px-5" style={styles.container}>
                    <div style={styles.container}>
                        <Navbar.Brand as={Link} to="/" style={styles.fontBrand}>
                            <Image src={LOGO} style={styles.image} />
                        </Navbar.Brand>
                        <Nav className="me-auto" style={styles.navFont}>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </div>

                    <div style={styles.container}>
                        <Nav className="me-auto" style={styles.navFont}>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                        </Nav>

                        {/* <NavDropdown title="Login" id="collasible-nav-dropdown" style={styles.button}>
                            <NavDropdown.Item as={Link} to="/login">Profile</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
                        </NavDropdown> */}
                        <button style={styles.button}><i class="fa-brands fa-shopify"></i></button>
                    </div>
                </Container>
            </Navbar>
        )
    }
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navFont: {
        color: 'white',
        fontWeight: '600'
    },
    button: {
        border: 'none',
        backgroundColor: 'transparent',
    },
    image: {
        height: '50px'
    }
}

export default NavigationBar