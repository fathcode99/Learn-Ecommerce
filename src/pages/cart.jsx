import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import Axios from "axios";
import {
    Container, Row, Col
} from 'react-bootstrap'

import Footer from '../component/footer'

import NavBar from '../component/navbar'
import NavLogin from '../component/navlogin'

export default function Cart() {
    const state = useSelector((state) => state.userReducer)
    const [cartList, setCartList] = useState()

    useEffect(() => {
        Axios.get(`http://localhost:2000/user/${state.id}`)
            .then(res => {
                setCartList(res.data.cart)
            })
    }, [state.id])

    const onDelete = (index) => {
        let tempCart = state.cart
        tempCart.splice(index, 1)
        Axios.patch(`http://localhost:2000/user/${state.id}`, { cart: tempCart })
            .then(res => {
                setCartList(res.data.cart)
            })
    }

    if (!state.username) {
        return (<Navigate to="/login" />)
    }

    return (
        <div className="bg-detail">
            <NavLogin />
            <NavBar />
            {console.log(cartList)}
            <Container style={{paddingBottom: "4rem"}}>
                <Row className="mt-3 mb-0">
                    <Col lg={12} className="heading-detail px-0">
                        <label>Your Shopping Cart</label>
                        <Link as={Link} to="/">
                            <button className="btn-style-2"><i className="fa-solid fa-cart-shopping px-2"></i>Continue Shopping</button>
                        </Link>
                    </Col>
                </Row>
                {cartList ?
                    cartList.map((item, index) =>
                        <Row>
                            <div className="cart-box mt-3 py-3">
                                <div className="m-0">
                                    <img className="cart-box-img me-2" src={item.images} alt="product" />
                                </div>
                                <div className="cart-title me-2">
                                    <div>{item.name}</div>
                                    <div>{item.brand}</div>
                                    <div>Ready stock : {item.maxStock}</div>
                                </div>
                                <div className="cart-counter me-2">
                                    <p style={{ width: "5vw" }}>{item.qtyBuy}</p>
                                </div>
                                <div className="cart-price me-2">Price : IDR {(item.qtyBuy * item.price).toLocaleString()}</div>
                                <div className="cart-close" >
                                    <button className="btn-style-2" onClick={() => onDelete(index)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                        </Row>
                    )
                    :
                    []
                }
            </Container>
            <Footer />
        </div>
    )
}