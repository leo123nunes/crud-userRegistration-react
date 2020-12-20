import './Logo.css'
import Logo from '../../assets/logo.png'
import React from 'react'
import {Link} from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="Logo" className="logoImage"></img>
        </Link>
    </aside>