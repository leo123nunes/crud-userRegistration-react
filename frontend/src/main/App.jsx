import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../components/templates/Logo.jsx'
import Nav from '../components/templates/Nav.jsx'
import Main from '../components/templates/Main.jsx'
import Footer from '../components/templates/Footer.jsx'

export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main icon="home" title="Home" subtitle="A user registration made with React"></Main>
        <Footer></Footer>
    </div>