import React from 'react'
import './NavItems.css'

export default props => 
    <React.Fragment>
        <a href="#/">
            <i className="fa fa-home navItem"> Home</i>
        </a>
        <a href="#/users">
            <i className="fa fa-users navItem"> Users</i>
        </a>
    </React.Fragment>