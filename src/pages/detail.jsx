import React, { useEffect, useState } from "react";
import Axios from 'axios'
import { useParams } from 'react-router-dom'



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
        <div style={{ fontSize: "100px" }}>
            {products.name}
        </div>
    )
}