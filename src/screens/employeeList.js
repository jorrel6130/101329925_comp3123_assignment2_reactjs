import React, { Component } from 'react'
import axios from '../api/axios'
import { Link } from 'react-router-dom'

export default class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }  
    getUsers = async() => {
            const userUrl ="/api/v1/emp/employees"
            try {
                const response = await axios.get(userUrl)
                console.log(response.data)
                this.setState({...this.state, users: response.data})
                return response.data
            } catch (error) {
                console.log(error)
            }
        }

        componentDidMount() {
            this.getUsers()
        }

    render() {
        return (
            <div className='tableSection'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {
                    this.state.users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>
                                <a href={`/employee/${user._id}`}>{user.last_name}, {user.first_name}</a>
                            </td>
                            <td>
                                <button onClick='' className='editButton'>Edit</button>
                            </td>
                            <td>
                                <button onClick='' className='deleteButton'>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </table>
            </div>
        )
    }
}