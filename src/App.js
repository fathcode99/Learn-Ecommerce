import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Axios from 'axios'
import { useDispatch } from "react-redux/es/exports";
// import Nav Bar
import NavigationBar from './component/NavigationBar';

// import pages
import HomePages from './pages/home';
import LoginPages from './pages/login';
import RegisterPages from './pages/register';


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    let id = localStorage.getItem('idUser')
    Axios.get(`http://localhost:2000/user/${id}`)
    .then(res => {
      dispatch({
        type : 'LOGIN',
        payload : res.data
      })
    })
  }, [dispatch])

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
      </Routes>
    </div>
  );
}
