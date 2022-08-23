import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import NavBar from '../component/navbar'
import NavLogin from '../component/navlogin'

import { Link } from 'react-router-dom'

import {
    Container, Row, Col, Accordion
} from 'react-bootstrap'


export default function History() {
    const state = useSelector((state) => state.historyReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        let idUser = localStorage.getItem('idUser')
        Axios.get(`http://localhost:2000/history?idUser=${idUser}`)
            .then(res => {
                dispatch({
                    type: 'HISTORY_UPDATE',
                    payload: res.data
                })
            })
    }, [state.history, dispatch])

    const onDelHistory = (index) => {
        Axios.delete(`http://localhost:2000/history/${index + 1}`)
            .then(res => {
                let idUser = localStorage.getItem('idUser')
                Axios.get(`http://localhost:2000/history?idUser=${idUser}`)
                    .then(res => {
                        dispatch({
                            type: 'HISTORY_UPDATE',
                            payload: res.data
                        })
                    })
            })
    }

    return (
        <div className="bg-detail">
            <NavLogin />
            <NavBar />
            <Container>
                <Row className="mt-3 mb-0">
                    <Col lg={12} className="heading-detail px-0">
                        <label>Your History Shop</label>
                        <div>
                            <Link as={Link} to="/">
                                <button className="btn-style mt-4 me-3">Back to Shop</button>
                            </Link>

                        </div>
                    </Col>
                </Row>
                {state.history !== 0 ?
                    state.history.reverse().map((item, index) => {
                        return (
                            <Row className="accordion-box mt-3" key={index}>
                                <Accordion >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{item.username} - {item.time} </Accordion.Header>
                                        <Accordion.Body>
                                            {item.products.map((item2, index2) => {
                                                return (
                                                    <Row key={item2.id}>
                                                        <div className="cart-box mt-1 py-2">
                                                            <div className="cart-box-img m-0">
                                                                <img className="cart-img me-2" src={item2.images} alt="product" />
                                                            </div>
                                                            <div className="cart-title me-2">
                                                                <div className="cart-title-brand">{item2.brand}</div>
                                                                <div className="cart-title-name">{item2.name}</div>
                                                            </div>
                                                            <div className="cart-price-pcs me-2">IDR {item2.price.toLocaleString()} / pcs</div>
                                                            <div className="cart-counter me-2"><p>{item2.qtyBuy}</p></div>
                                                            <div className="cart-price me-2">IDR {(item2.qtyBuy * item2.price).toLocaleString()}</div>
                                                        </div>
                                                    </Row>
                                                )
                                            })}
                                            <div className="history-del">
                                                <button className="btn-style mt-4" onClick={() => onDelHistory(index)}>Delete History</button>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </Row>
                        )
                    })
                    :
                    ''
                }
            </Container>
        </div>
    )
}