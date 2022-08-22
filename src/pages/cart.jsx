import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Axios from "axios";
import {
    Container, Row, Col
} from 'react-bootstrap'

import NavBar from '../component/navbar'
import NavLogin from '../component/navlogin'

export default function Cart() {
    const state = useSelector((state) => state.userReducer)

    // note : cart di redux itu kosong
    // note : kalau mau edit cart bisa lewat cartList di bawah

    const [cartList, setCartList] = useState([])
    const [indexEdit, setIndexEdit] = useState(null)

    const [qty, setQty] = useState(null)

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

    const onEdit = (index) => {
        setIndexEdit(index)
        setQty(cartList[index].qtyBuy)
    }

    const onMin = (index) => {
        setQty(+qty - 1)
    }

    const onPlus = () => {
        setQty(+qty + 1)
    }

    const onQty = (e, maxStock) => {
        setQty(+e.target.value)

        let n = +e.target.value

        if (n < +1) {
            setQty(0)
        } else if (n > maxStock) {
            setQty(maxStock)
        } else {
            setQty(n)
        }
    }

    const onSave = (index) => {
        let tempCart = cartList
        let tempProd = cartList[index]

        tempProd.qtyBuy = qty
        tempCart.splice(index, 1, tempProd)

        Axios.patch(`http://localhost:2000/user/${state.id}`, { cart: tempCart })
            .then(res => {
                setCartList(res.data.cart)
            })
        setIndexEdit(null)
    }

    const TotalPrice = () => {
        let total = null
        for (let i = 0; i < cartList.length; i++) {
            total += +cartList[i].qtyBuy * +cartList[i].price
        }
        return (total)
    }

    return (
        <div className="bg-detail">
            <NavLogin />
            <NavBar />
            {console.log(cartList)}
            <Container style={{ paddingBottom: "4rem" }}>
                <Row className="mt-3 mb-0">
                    <Col lg={12} className="heading-detail px-0">
                        <label>Your Shopping Cart</label>
                        <Link as={Link} to="/">
                            <button className="btn-style-2"><i className="fa-solid fa-cart-shopping px-2"></i>Checkout</button>
                        </Link>
                    </Col>
                </Row>

                {cartList.length !== 0 ?
                    cartList.map((item, index) =>
                        <Row key={item.id}>
                            <div className="cart-box mt-3 py-3">
                                <div className="cart-box-img m-0">
                                    <img className="cart-img me-2" src={item.images} alt="product" />
                                </div>
                                <div className="cart-title me-2">
                                    <div className="cart-title-brand">{item.brand}</div>
                                    <div className="cart-title-name">{item.name}</div>
                                    <div>Ready stock : {item.maxStock}</div>
                                </div>
                                <div className="cart-price-pcs me-2">IDR {item.price.toLocaleString()} / pcs</div>

                                <div className="cart-counter me-2">
                                    {indexEdit === index ?
                                        <>
                                            <button className="btn-qty" onClick={() => onMin(index)} disabled={qty === 1 ? true : false}> -</button>
                                            <input className="qty-input" type="text" value={qty} onChange={(e) => onQty(e, item.maxStock)} />
                                            <button className="btn-qty" onClick={onPlus} disabled={qty === item.maxStock ? true : false}>+</button>

                                            <button className="btn-style-2 px-1" onClick={() => setIndexEdit(null)}>
                                                <i className="fa-solid fa-rectangle-xmark "></i>
                                            </button>
                                            <button className="btn-style-2 p-0" onClick={() => onSave(index)}>
                                                <i className="fa-solid fa-square-check "></i>
                                            </button>
                                        </>
                                        :
                                        <>
                                            <p className="m-0">{item.qtyBuy}</p>
                                            <button className="btn-style-2" onClick={() => onEdit(index)}><i className="fa-solid fa-pen-to-square"></i></button>
                                        </>
                                    }
                                </div>

                                <div className="cart-price me-2">IDR {(item.qtyBuy * item.price).toLocaleString()}</div>
                                <div className="cart-close" >
                                    <button className="btn-style-2" onClick={() => onDelete(index)}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                        </Row>
                    )
                    :
                    []
                }
                <Row>
                    <div className="cart-box-bottom py-4 mt-3">
                        <div>
                            <Link as={Link} to="/">
                                <button className="btn-style-3 "><i class="fa-solid fa-arrow-left-long pe-2"></i>Back to Shop</button>
                            </Link>
                        </div>
                        <div className="cart-bottom-price">
                            Total Price : IDR {cartList.length !== 0 ? TotalPrice().toLocaleString() : '' }
                            <Link as={Link} to="/">
                                <button className="btn-style-3 ps-5"><i className="fa-solid fa-cart-shopping px-2"></i></button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}