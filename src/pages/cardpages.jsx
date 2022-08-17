import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";

import {
    Carousel,
    Container,
    Row,
    Col
} from "react-bootstrap"

import CardProduct from '../component/card'
import "./stylePages.css"

export default function Card() {
    const [products, setProducts] = useState([])
    const [carouselImg, setCarouselImg] = useState([])
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
        <Container fluid className="primary-container">
            <Row>
                <Col lg={12} >
                    <Carousel>
                        {carouselImg.map(item =>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item.img}
                                    alt="First slide"
                                    style={{height: "100vh"}}
                                />
                                <Carousel.Caption className="text-slide-box">
                                    <h3 className="text-slide">{item.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Col>

                <Col lg={12} className="label-ourproducts-container">
                    <div className="label-ourproducts">
                        OUR PRODUCTS
                        <p className="p-ourproducts">Best products already for you</p>
                    </div>
                </Col>

                <Col lg={12} className="container-card">
                    {products.map((item) =>
                        <CardProduct
                            data={item}
                            key={item.id}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    )
}