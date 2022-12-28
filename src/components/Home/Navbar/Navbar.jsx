import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.navbar__container}>
            <div className={styles.navbar__container__left}>

                <h1>Matrix Games</h1>

            </div>

            <div className={styles.navbar__container__mobile}>
                <FiMenu className={styles.navbar__container__mobile__icon} />

                {toggle && (
                    <ul className={styles.navbar__container__mobile__link}>
                        <li>Home</li>
                        <li>Games</li>
                        <li>Plans</li>
                        <li>Contact</li>
                    </ul>
                )}


            </div>

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