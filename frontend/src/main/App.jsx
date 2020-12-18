import './App.css'
import React from 'react'

import Logo from '../components/templates/Logo.jsx'
import Nav from '../components/templates/Nav.jsx'
import Main from '../components/templates/Main.jsx'
import Footer from '../components/templates/Footer.jsx'

export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>