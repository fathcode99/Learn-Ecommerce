import React from "react";

import "./component.css"

export default function Card(products) {
    return (
        <div className="card-container">
            {/* {console.log(products.data.images[0])} */}
            <div className="card-container-img">
                <img src={products.data.images[0]} className="card-img" alt="card" />
            </div>
            <div >
                <p className="card-title">{products.data.name}</p>
                <p className="card-price">IDR {products.data.price}</p>
            </div>
        </div>
    )
}