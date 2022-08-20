import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

import Axios from "axios";

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

    return (
        <div>
            <NavLogin />
            <NavBar />
            Data Products :
            Nama : { cartList ? cartList[0].name : ''}
        </div>
    )
}