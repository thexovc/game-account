import React, { useState } from 'react'
import styles from './Navbar.module.css'
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
        <div className={styles.navbar__container}>
            <div className={styles.navbar__container__left}>

                <h1>Matrix Games</h1>

            </div>

            <div className={styles.navbar__container__mobile} onClick={handleToggle}>
                <FiMenu className={styles.navbar__container__mobile__icon} />
            </div>

            {toggle && (
                <motion.div
                    variants={variants}
                    className={styles.navbar__container__mobile__link}>
                    <li>Home</li>
                    <li>Games</li>
                    <li>Plans</li>
                    <li>Contact</li>
                    <button className={styles.navbar__container__mobile__link__button__login}>Sign In</button>
                    <button className={styles.navbar__container__mobile__link__button__signup}>Sign Up</button>
                </motion.div>
            )}

            <div className={styles.navbar__container__right}>
                <ul className={styles.navbar__container__right__link}>
                    <li>Home</li>
                    <li>Games</li>
                    <li>Plans</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.navbar__container__right__button}>
                    <button className={styles.navbar__container__right__button__login}>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar