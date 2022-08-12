import React from "react";
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

import "./stylePages.css"
// import NavigationBar from '../component/NavigationBar';

export default function HomePage() {
    return (
        <div>
            {/* <NavigationBar /> */}
            <Container fluid className="cont-bg">
                <Row>
                    <Col className="container-general container-home">
                        <h1 className="home-heading">The Powerfull Shoes Store in the World !</h1>
                        <p className="home-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Eligendi reprehenderit quasi accusantium dicta, temporibus cumque?
                            Sunt voluptate beatae quia deserunt maiores ab dicta incidunt enim,
                            voluptatibus necessitatibus repudiandae quaerat? A.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}