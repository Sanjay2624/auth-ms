import React, { useEffect, useState } from 'react'

import './signup.css'

export const Signup = () => {


    // window.localStorage.setItem("users", [{ fullname: "", email: }])


    const [userInfo, setUserInfo] = useState({ fullName: '', email: '', password: '' })
    const [error, setError] = useState({ fullName: false, email: false, password: false })
    const onChangeHandler = (event) => {

        setError((prev) => {
            return {
                ...prev,
                [event.target.name]: false,
            }
        })



        setUserInfo(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,

            }
        })

    }


    const onSignUpHandler = (erreer) => {
        let isError = false
        if (!userInfo.fullName && !error.fullName) {
            isError = true
            setError(prev => {
                return {
                    ...prev,
                    fullName: true
                }
            })
        }

        if (!userInfo.email) {
            isError = true

            setError(prev => {
                return {
                    ...prev,
                    email: true
                }
            })
        }

        if (!userInfo.password) {
            isError = true
            setError(prev => {
                return {
                    ...prev,
                    password: true
                }
            })
        }

        const errorValue = Object.values(error);

        if (errorValue.every(item => item === false) && !isError) {

        }

    }



    return (
        <div className='main-login-page'>
            <div className="login-page">
                <div className='login-title'>
                    <h1>Sign Up</h1>
                </div>
                <div className={error.fullName && !userInfo.fullName ? ' user-input error-state' : 'user-input'} id='email-id' >
                    <input type="text" name='fullName' value={userInfo.fullName} placeholder='full name' onChange={onChangeHandler} />
                </div>
                <div className={error.email && !userInfo.email ? ' user-input error-state' : 'user-input'} id='email-id'>
                    <input type="text" name='email' value={userInfo.email} placeholder='email address' onChange={onChangeHandler} />
                </div>
                <div className={error.password && !userInfo.password ? ' user-input error-state' : 'user-input'}>
                    <input type="password" name='password' value={userInfo.password} placeholder='password' onChange={onChangeHandler} />
                </div>
                <button type="button" className="login-button" onClick={() => { onSignUpHandler(error); }}>
                    Sign Up
                </button>
                <p> Login</p>
            </div>
        </div>
    )
}