import React from 'react'
import styles from './Games.module.css'

const Games = () => {
    return (
        <div className={styles.game__container}>
            <div className={styles.game__container__title}>
                <h1>Games</h1>
                <ul>
                    <li>Popular</li>
                    <li>Recent</li>
                </ul>
            </div>

            <div className={styles.game__container__card__con}>

                <div className={styles.game__container__card__con__card}>
                    <img src="" alt="" />
                    <p>Call of Duty mobile</p>
                    <div>Enter</div>
                </div>

            </div>

        </div>
    )
}

export default Games