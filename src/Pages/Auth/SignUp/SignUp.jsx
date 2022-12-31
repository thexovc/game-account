import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'


const SignUp = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)

    const home = () => {
        navigate('/')
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const login = () => {
        navigate('/login')
    }
    const signup = () => {
        navigate('/signup')
    }


    return (
        <div className="signup">
            <div className='login__container'>
                <div className="login__container__toggle" onClick={handleToggle}>
                    <FiMenu className="navbar__container__mobile__icon" />
                </div>
                <div className="login__container__left">

                    <div className="login__container__left__form">

                        <h1>SIGN UP</h1>

                        <form action="">
                            <label htmlFor="username">Username</label>
                            <input type="text" /> <br />
                            <label htmlFor="email">Email address</label>
                            <input type="email" /> <br />
                            <label htmlFor="Password">Password</label>
                            <input type="password" /><br />
                            <label htmlFor="Password">Confirm Password</label>
                            <input type="password" />

                            <div className="login__container__left__form__checkbox">
                                <input type="checkbox" />
                                <span>I agree with the</span> Terms and Policy
                            </div>
                            <button>Continue</button>
                        </form>

                        <div className="login__container__left__form__signup">
                            <div style={{ cursor: "pointer" }}>
                                Google Sign Up
                            </div>

                            <p>Already have an account? <span style={{ cursor: "pointer" }}>Sign In</span></p>
                        </div>

                    </div>
                </div>
                <div className="login__container__right">
                    <div className='login__container__right__nav'>
                        <p style={{ cursor: "pointer" }} onClick={home}>Home</p>
                        <p style={{ cursor: "pointer" }}>Games</p>
                        <p style={{ cursor: "pointer" }}>Contact us</p>
                    </div>
                </div>

                {toggle && (
                    <div
                        className="navbar__container__mobile__link">
                        <div className="navbar__container___mobile__link__close" onClick={handleToggle}>
                            x
                        </div>
                        <li style={{ cursor: "pointer" }} onClick={home}>Home</li>
                        <li style={{ cursor: "pointer" }}>Games</li>
                        <li style={{ cursor: "pointer" }}>Plans</li>
                        <li style={{ cursor: "pointer" }}>Contact</li>
                        <button style={{ cursor: "pointer" }} onClick={login} className="navbar__container__mobile__link__button__login">Sign In</button>
                        <button style={{ cursor: "pointer" }} onClick={signup} className="navbar__container__mobile__link__button__signup">Sign Up</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SignUp