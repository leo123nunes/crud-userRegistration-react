import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../components/templates/Logo.jsx'
import Nav from '../components/templates/Nav.jsx'
import Footer from '../components/templates/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../components/templates/Routes.jsx'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </BrowserRouter>
