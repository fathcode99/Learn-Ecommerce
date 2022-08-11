import React from "react";
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

import "./stylePages.css"

export default function HomePage() {
        return (
            <Container fluid className="cont-bg">
                <Row>
                    <Col className="container-general container-home">
                        <h1 className="home-heading">The Powerfull Shopping Shoes in the World !</h1>
                        <p className="home-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Eligendi reprehenderit quasi accusantium dicta, temporibus cumque? 
                            Sunt voluptate beatae quia deserunt maiores ab dicta incidunt enim, 
                            voluptatibus necessitatibus repudiandae quaerat? A.</p>
                    </Col>
                </Row>
            </Container>
        )
}