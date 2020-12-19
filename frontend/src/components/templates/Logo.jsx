import './Logo.css'
import Logo from '../../assets/logo.png'
import React from 'react'

export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="Logo" className="logoImage"></img>
        </a>
    </aside>