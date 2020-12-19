import './Main.css'
import React from 'react'
import Header from './Header.jsx'

export default props => 
    <React.Fragment>
        <Header {...props}>
        </Header>
        <main className="content">
            <div className="pt-2 pl-2 pb-0 m-4 newContent">
                {props.children}
            </div>
        </main>
    </React.Fragment>
