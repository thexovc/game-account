import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu } from 'react-icons/fi'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'

const Navbar = ({ toggle, setToggle }) => {

    const navigate = useNavigate()

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const login = () => {
        navigate('login')
    }
    const signup = () => {
        navigate('signup')
    }


    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    }

    return (
        <div className="navbar__container">
            <div className="navbar__container__left">

                <h1>Matrix Games</h1>

            </div>

            <div className="navbar__container__mobile" onClick={handleToggle}>
                <FiMenu className="navbar__container__mobile__icon" />
            </div>

            {toggle && (
                <motion.div
                    variants={variants}
                    className="navbar__container__mobile__link">
                    <li style={{ cursor: "pointer" }}>Home</li>
                    <li style={{ cursor: "pointer" }}>Games</li>
                    <li style={{ cursor: "pointer" }}>Plans</li>
                    <li style={{ cursor: "pointer" }}>Contact</li>
                    <button style={{ cursor: "pointer" }} className="navbar__container__mobile__link__button__login">Sign In</button>
                    <button style={{ cursor: "pointer" }} className="navbar__container__mobile__link__button__signup">Sign Up</button>
                </motion.div>
            )}

            <div className="navbar__container__right">
                <ul className="navbar__container__right__link">
                    <li style={{ cursor: "pointer" }}>Home</li>
                    <li style={{ cursor: "pointer" }}>Games</li>
                    <li style={{ cursor: "pointer" }}>Plans</li>
                    <li style={{ cursor: "pointer" }}>Contact</li>
                </ul>
                <div className="navbar__container__right__button">
                    <button style={{ cursor: "pointer" }} onClick={login} className="navbar__container__right__button__login">Sign In</button>
                    <button style={{ cursor: "pointer" }} onClick={signup}>Sign Up</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar