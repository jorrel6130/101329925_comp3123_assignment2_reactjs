import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from '../api/axios'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidden, setHidden] = useState(true)
    let navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                return null
        }
    }

    const login = async() => {
        const url = '/api/v1/user/login'
        try {
            const response = await axios.post(url, {
                email: email,
                password: password
            })
            if (response.status === 200) {
                await localStorage.setItem('token', response.data.token);
                alert('Login successful! Click Home')
                await navigate('/employees')
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
    }

    const hidePassword = () => {
        switch (hidden) {
            case true:
                setHidden(false)
                break
            case false:
                setHidden(true)
                break
            default:
                return null
        }
    }

    return (
        <div className='loginSheet'>
            <ul>
                <li>
                    <h3>Email</h3>
                    <input type='text' name='email' onChange={handleChange} value={email} placeholder='Enter Email' />
                    
                </li>
                <li>
                    <h3>Password</h3>
                    <input type={hidden ? 'password' : 'text'} name='password' className='passwordField' onChange={handleChange} value={password} placeholder='Enter Password' />
                    <input type='checkbox' name='hide' onClick={hidePassword} checked={hidden} />
                </li>
                <li>
                    <button onClick={() => {login()}}>Login</button>
                    <button onClick={() => {navigate('/signup')}}>Sign Up</button>
                </li>
            </ul>
        </div>
    )
}

