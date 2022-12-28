import React from 'react'
import styles from './Games.module.css'
import cod1 from '../../../assets/Home/Game/cod1.jpg'

const Games = () => {
    return (
        <div className={styles.game__container}>
            <div className={styles.game__container__title}>
                <h1>Games</h1>
                <ul>
                    <li className={styles.game__container__title__active}>Popular</li>
                    <li>Recent</li>
                </ul>
            </div>

            <div className={styles.game__container__card__con}>

                <div className={styles.game__container__card__con__card}>
                    <img src={cod1} alt="" />
                    <p>Call of Duty mobile</p>
                    <div>Enter</div>
                </div>
                <div className={styles.game__container__card__con__card}>
                    <img src={cod1} alt="" />
                    <p>Call of Duty mobile</p>
                    <div>Enter</div>
                </div>
                <div className={styles.game__container__card__con__card}>
                    <img src={cod1} alt="" />
                    <p>Call of Duty mobile</p>
                    <div>Enter</div>
                </div>
                <div className={styles.game__container__card__con__card}>
                    <img src={cod1} alt="" />
                    <p>Call of Duty mobile</p>
                    <div>Enter</div>
                </div>
                <div className={styles.game__container__card__con__card}>
                    <img src={cod1} alt="" />
                    <p>Call of Duty mobile</p>
                    <div>Enter</div>
                </div>

            </div>

        </div>
    )
}

export default Games