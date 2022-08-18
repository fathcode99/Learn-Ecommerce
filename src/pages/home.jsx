import React from "react";
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./stylePages.css"

export default function HomePage() {
    return (
        <div>
            <div className="home-bg text-front-bg img-front">
                <div className="img-front"> BEST PRODUCT 
                <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>TESTEATE</Col>
                </Row>
            </Container>

        </div>
    )
}