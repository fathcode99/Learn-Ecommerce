import React, { useEffect, useState } from "react";
import Axios from 'axios'
import { useParams } from 'react-router-dom'

import {
    Container, Col, Row
} from "react-bootstrap"

import "./stylePages.css"

export default function Detail() {
    const [products, setProducts] = useState({})

    let { id } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:2000/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [id])

    return (
        <Container fluid className="primary-container">
            <Row className="container-detail">
                <Col>
                    {products.images ?
                        <img src={products.images[0]} alt="products"/>
                        : []}
                </Col>

                <Col>
                    <Col className="detail-title">{products.name}</Col>
                    <Col className="detail-p">{products.description}</Col>
                    <Col className="detail-stock">BRAND : {products.brand}</Col>
                    <Col className="detail-stock">STOCK : {products.stock}</Col>
                    <Col className="detail-stock">HARGA : {products.price}</Col>
                </Col>
            </Row>
        </Container>
    )
}