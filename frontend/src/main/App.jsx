import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../components/templates/Logo.jsx'
import Nav from '../components/templates/Nav.jsx'
import Main from '../components/templates/Main.jsx'
import Footer from '../components/templates/Footer.jsx'
import Home from '../components/templates/home/Home.jsx'

export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Home></Home>
        <Footer></Footer>
    </div>