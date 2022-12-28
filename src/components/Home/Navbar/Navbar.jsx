import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu } from 'react-icons/fi'
import { motion } from "framer-motion"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
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
                    <li>Home</li>
                    <li>Games</li>
                    <li>Plans</li>
                    <li>Contact</li>
                    <button className="navbar__container__mobile__link__button__login">Sign In</button>
                    <button className="navbar__container__mobile__link__button__signup">Sign Up</button>
                </motion.div>
            )}

            <div className="navbar__container__right">
                <ul className="navbar__container__right__link">
                    <li>Home</li>
                    <li>Games</li>
                    <li>Plans</li>
                    <li>Contact</li>
                </ul>
                <div className="navbar__container__right__button">
                    <button className="navbar__container__right__button__login">Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar