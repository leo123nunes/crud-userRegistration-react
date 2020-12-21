import React, { Component } from 'react'
import Main from '../Main.jsx'
import axios from 'axios'

const userPage = {
    icon: "users",
    title: "Users",
    subtitle: "Operations to do with the users: create, read, update and delete."
}

const baseUrl = "http://localhost:3001/users"
const initialState = {
    user: { name: "", email: "" },
    list: []
}

export default class Users extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        var user = this.state.user
        var method = user.id ? "put" : "post"
        var url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`
        axios[method](url, user).then(resp => {
            var list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }

    getUpdatedList(user) {
        var list = this.state.list.filter(el => el.id != user.id)
        list.unshift(user)
        return list
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    updateField(data) {
        var user = { ...this.state.user }
        user[data.target.name] = data.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12">
                        <div className="form-gropu">
                            <label className="">Name</label>
                            <input className="form-control" placeholder="Enter the name"
                                onChange={e => this.updateField(e)} name="name" value={this.state.user.name}></input>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="">Email</label>
                            <input className="form-control" placeholder="Enter the email"
                                onChange={e => this.updateField(e)} name="email" value={this.state.user.email}></input>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary m-2" onClick={e => this.save()}>Save</button>
                        <button className="btn btn-secondary m-2" onClick={e => this.clear()}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    renderTable() {
        return (
            <table className="table col-12 p-0">
                <th className="col-12 p-0 ">
                    <tr className="col-12 p-0">
                        <th className="col-1">Id</th>
                        <th className="col-3">Name</th>
                        <th className="col-3">Email</th>
                        <th className="col-3">Actions</th>
                    </tr>
                </th>
                <tbody>
                  {this.renderRows()} 
                </tbody>
            </table>
        )
    }

    deleteUser(user){
        var url = `${baseUrl}/${user.id}`
        axios['delete'](url, user).then(resp => {
            var list = this.state.list.filter(element => element != user)
            this.setState({user: initialState.user, list})
        })
        
    }

    renderRows() {
        return this.state.list.map(element => {
            console.log(element)
            return (
                <tr className="col-12 d-flex p-0">
                    <td className="col-1">{element.id}</td>
                    <td className="col-3">{element.name}</td>
                    <td className="col-3">{element.email}</td>
                    <td className="col-3">
                        <button className="btn btn-warning" onClick={e => this.load(element)}>
                            <i className=""></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={e => this.deleteUser(element)}>
                            <i className=""></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.state.list)
        return (
            <Main {...userPage}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
