import React, {Component} from 'react'
import Main from '../Main.jsx'

var userPage = {
    icon: "users",
    title: "Users",
    subtitle: "Operations to do with the users: create, read, update and delete."
}

export default class Users extends Component{
    render(){
        return <Main {...userPage}>User registration</Main>
    }
}
