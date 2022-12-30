import React from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const navigate = useNavigate()

    const home = () => {
        navigate('/')
    }


    return (
        <div className='login__container'>

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
                        <label htmlFor="Password">Password</label>
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

        </div>
    )
}

export default SignUp