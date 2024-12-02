import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from '../api/axios'

export default function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [hidden, setHidden] = useState(true)
    let navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'username':
                setUsername(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'password2':
                setPassword2(value)
                break
            default:
                return null
        }
    }

    const signup = async () => {
        if (password !== password2) {
            alert('Passwords do not match. Try again.')
            return
        }
        const url = '/api/v1/user/signup'
        try {
            const response = await axios.post(url, {
                username: username,
                email: email,
                password: password
            })
            if (response.status === 201) {
                alert('Sign Up Successful!')
                await navigate('/login')
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
                    <h3>Username</h3>
                    <input type='text' name='username' onChange={handleChange} value={username} placeholder='Enter New Username' />

                </li>
                <li>
                    <h3>Email</h3>
                    <input type='text' name='email' onChange={handleChange} value={email} placeholder='Enter New Email' />

                </li>
                <li>
                    <h3>Password</h3>
                    <input type={hidden ? 'password' : 'text'} name='password' className='passwordField' onChange={handleChange} value={password} placeholder='Enter New Password' />
                    <input type='checkbox' name='hide' onClick={hidePassword} checked={hidden} />
                </li>
                <li>
                    <h3>Confirm Password</h3>
                    <input type={hidden ? 'password' : 'text'} name='password2' className='passwordField' onChange={handleChange} value={password2} placeholder='Confirm Password' />
                    <input type='checkbox' name='hide' onClick={hidePassword} checked={hidden} />
                </li>
                <li>
                    <button onClick={() => {signup()}}>Sign Up</button>
                </li>
            </ul>
        </div>
    )
}

