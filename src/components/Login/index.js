import React from 'react'

import './login.css'

export const Login = () => {
    return (
        <div className='main-login-page'>
            <div className="login-page">
                <div className='login-title'>
                    <h1>Login</h1>
                </div>
                <div className="user-input" id='email-id'>
                    <input type="text" placeholder='email address' />
                </div>
                <div className="user-input">
                    <input type="text" placeholder='password' />
                </div>
                <button type="button" className="login-button">
                    LOGIN
                </button>
                <p> Signup</p>
            </div>
        </div>
    )
}