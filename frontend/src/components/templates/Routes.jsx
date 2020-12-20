import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './home/Home.jsx'
import UserCrud from './users/UserCrud.jsx'

export default props => 
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/users" component={UserCrud}></Route>
        <Redirect from="*" to="/"></Redirect>
    </Switch>
