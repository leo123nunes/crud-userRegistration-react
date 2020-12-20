import React from 'react'
import './NavItems.css'
import {Link} from 'react-router-dom'

export default props => 
    <React.Fragment>
        <Link to="/">
            <i className="fa fa-home navItem"> Home</i>
        </Link>
        <Link to="/users">
            <i className="fa fa-users navItem"> Users</i>
        </Link>
    </React.Fragment>