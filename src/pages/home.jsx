import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Carousel
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./stylePages.css"

import NavBar from '../component/navbar'
import NavLogin from '../component/navlogin'
import CardProduct from '../component/card'

import Footer from '../component/footer'

export default function HomePage() {
    const [carouselImg, setCarouselImg] = useState([])
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get('http://localhost:2000/products')
            .then(res => {
                setProducts(res.data)
                // console.log({products : res.data})
            })
        Axios.get('http://localhost:2000/slider')
            .then(res => {
                setCarouselImg(res.data)
            })
    }, [dispatch])


    return (
        <div>
            <NavLogin />
            <NavBar />
            <div className="home-bg text-front-bg img-front">
                <div className="img-front p-0">
                    <div>BEST PRODUCT</div>
                    <div className="p-img-front"><p>Lorem ipsum dolor sit amet</p></div>
                </div>
            </div>

            <div className="bg-gradient-all">

                <Container>
                    <Row className="search-bar-style my-2">
                        <Col lg={3} className="search-bar-icon">
                            <i className="fa-solid fa-filter px-2"></i> Filters
                            <i class="fa-solid fa-sort-down px-2"></i>
                        </Col>
                        <Col lg={6} className="search-bar-icon">
                            <input className="login-input" style={{ width: "100%" }} placeholder="Search" />
                            <button className="btn-style">Search</button>
                        </Col>
                        <Col lg={3} className="search-bar-icon">
                            <div><i className="fa-solid fa-heart-circle-plus px-2"></i></div>
                            <div><i className="fa-solid fa-cart-shopping px-2"></i></div>
                        </Col>
                    </Row>

                    <Row>
                        {/* LEFT SIDE */}
                        <Col lg={3} className="p-0">
                            <Col lg={12} className="ls-category">
                                <Col className="ls-category-text">CATEGORY</Col>
                                <Col className="ls-category-text">Shoes</Col>
                                <Col className="ls-category-text">Watches</Col>
                                <Col className="ls-category-text">Cloth</Col>
                                <Col className="ls-category-text">Hat</Col>
                                <Col className="ls-category-text">Glasses</Col>
                            </Col>

                            <Col lg={12}>
                                <img className="img-ads mt-3" src="https://i.pinimg.com/564x/07/0b/d4/070bd4a070f802ae7a2c8a6b3566fd2a.jpg" alt="img-ads" />
                            </Col>

                            <Col lg={12} className="ls-category mt-3">
                                <Col className="ls-category-text">LATEST PRODUCT</Col>
                                <Col>
                                    <div className="ls-history p-2">
                                        <div style={{ width: "35%" }}>
                                            <img className="img-history" src="https://i.pinimg.com/564x/ac/02/3c/ac023c999ff3492f76e0c0b7c9598106.jpg" alt="history-img" />
                                        </div>
                                        <div style={{ width: "65%" }} className="ls-history-product">
                                            <div>NAME PRODUCT</div>
                                            <div>IDR : Rp 1.000.000</div>
                                            <div style={{ fontSize: "12px" }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                        </div>
                                    </div>
                                </Col>


                            </Col>

                        </Col>

                        {/* RIGHT SIDE */}
                        <Col lg={9} className="pe-0">
                            <Col lg={12}>
                                <Carousel>
                                    {carouselImg.map(item =>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 carousel-img"
                                                src={item.img}
                                                alt="First slide"
                                                style={{ height: "50vh" }}
                                                key={item.id}
                                            />
                                        </Carousel.Item>
                                    )}
                                </Carousel>
                            </Col>

                            <Col lg={12} className="rs-title mb-0">
                                BEST DEAL TODAY
                            </Col>
                            <Row className="mt-3">
                                <Col lg={6}>
                                    <Carousel>
                                        {carouselImg.map(item =>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carousel-img"
                                                    src={item.img}
                                                    alt="First slide"
                                                    style={{ height: "20vh" }}
                                                    key={item.id}
                                                />
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </Col>

                                <Col lg={6}>
                                    <Carousel>
                                        {carouselImg.map(item =>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carousel-img"
                                                    src={item.img}
                                                    alt="First slide"
                                                    style={{ height: "20vh" }}
                                                    key={item.id}
                                                />
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </Col>
                            </Row>
                            <Col lg={12} className="rs-title">
                                BEST PRODUCTS
                            </Col>

                            <Col lg={12} className="p-0">
                                <Col lg={12} className="container-card ">
                                    {products.map((item) =>
                                        <CardProduct
                                            data={item}
                                            key={item.id}
                                        />
                                    )}
                                </Col>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}