import React, { Component } from 'react'
import axios from '../api/axios'

export default class login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    login = async() => {
        const url = '/api/v1/user/login'
        try {
            const response = await axios.post(url)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className='loginSheet'>
                <ul>
                    <li>
                        <h3>email</h3>
                        <input type='text' name='email' onChange={this.handleChange} value={this.state.email} placeholder='Enter Email' />
                    </li>
                    <li>
                        <h3>Password</h3>
                        <input type='text' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Enter Password' />
                    </li>
                    <li>
                        <button onClick={this.login}>Login</button>
                    </li>
                </ul>
            </div>
        )
    }
}
