import React from "react";

import "./component.css"
import { Link } from 'react-router-dom'

export default function Card(products) {
    return (
        <Link as={Link} to={`/detail/${products.data.id}`} className="link-detail">
            < div className="card-container">
                {/* {console.log(products.data.images[0])} */}
                <div className="card-container-img">
                    <img src={products.data.images[0]} className="card-img" alt="card" />
                </div>
                <div >
                    <p className="card-title">{products.data.name}</p>
                    <p className="card-price">IDR {products.data.price.toLocaleString()}</p>
                </div>
            </div>
        </Link >
    )
}