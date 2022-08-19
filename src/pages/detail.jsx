import React, { useEffect, useState } from "react";
import Axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
    Container, Col, Row, Button
} from "react-bootstrap"

import NavBar from '../component/navbar'
import NavLogin from '../component/navlogin'

import "./stylePages.css"

export default function Detail() {
    const state = useSelector((state) => state.userReducer)
    const [products, setProducts] = useState({})
    const [qty, setQty] = useState(1)
    const [toLogin, setToLogin] = useState(false)
    const [btnDisable, setBtnDisable] = useState(false)

    let { id } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:2000/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [id])

    const onMin = () => {
        setQty(+qty - 1)
        if (qty < 3)
            return setBtnDisable(true)
    }
    const onPlus = () => {
        setQty(+qty + 1)
        if (qty > -1)
            return setBtnDisable(false)
    }

    const onCeckout = () => {
        if (!state.username)
            return setToLogin(true)
    }

    if (toLogin)
        return (<Navigate to="/login" />)

    return (
        <div className="bg-detail">
            <NavLogin />
            <NavBar />

            <Container>
                <Row className="mt-3 mb-0">
                    <Col lg={12} className="heading-detail px-0">
                        <label>DETAIL PRODUCT</label>
                        <button className="btn-style " onClick={onCeckout} ><i className="fa-solid fa-cart-shopping px-2"></i>My Cart</button>
                    </Col>
                </Row>

                <Row className="py-4">
                    <Col lg={5} className="detail-img-box px-0">
                        {products.images ?
                            <img src={products.images[0]} alt="products" className="img-detail" />
                            : ''}
                    </Col>

                    <Col lg={7} className="ps-4">
                        <Col className="detail-brand mb-0 p-0">{products.brand ? products.brand : ''}</Col>
                        <Col className="detail-title">{products.name ? products.name : ''}</Col>
                        <Col className="detail-price">IDR : {products.price ? products.price.toLocaleString() : ''}</Col>
                        <Col className="detail-p"> Ready stock :{products.stock ? products.stock : ''}</Col>
                        <Col className="detail-p">{products.description ? products.description : ''}</Col>

                        <Col className="detail-p"><i className="fa-solid fa-tags px-3"></i> Special Discount Today</Col>
                        <Col className="detail-p"><i className="fa-solid fa-tags px-3"></i>Free Delivery Order </Col>

                        <Col>
                            <label className="detail-p me-3"> Set Quantity : </label>
                            <button className="btn-qty" onClick={onMin} disabled={btnDisable}> -</button>
                            <input className="qty-input" type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
                            <button className="btn-qty" onClick={onPlus}>+</button>
                        </Col>
                        <Col>
                            <button className="btn-style me-2 mt-3" onClick={onCeckout} ><i className="fa-solid fa-cart-shopping px-2"></i>Add to Cart </button>
                            <button className="btn-style" onClick={onCeckout} ><i class="fa-solid fa-comment-dollar px-2"></i>Chat Seller </button>
                        </Col>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}