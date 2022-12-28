import React from 'react'
import './Games.css'
import cod1 from '../../../assets/Home/Game/cod1.jpg'

const Games = () => {
    return (
        <div className="game__container">
            <div className="game__container__title">
                <h1>Games</h1>
                <ul>
                    <li className="game__container__title__active">Popular</li>
                    <li>Recent</li>
                </ul>
            </div>

            <div className="game__container__card__con">

                <div className="game__container__card__con__card">
                    <img src={cod1} alt="" />
                    <div>
                        <p>Call of Duty mobile</p>
                        <p className="game__container__card__con__card__btn">Enter</p>
                    </div>
                </div>
                <div className="game__container__card__con__card game__container__card__con__gray">
                    <img src={cod1} alt="" />
                    <div>
                        <p>Call of Duty mobile</p>
                        <p className="game__container__card__con__card__btn">Enter</p>
                    </div>
                </div>
                <div className="game__container__card__con__card game__container__card__con__gray">
                    <img src={cod1} alt="" />
                    <div>
                        <p>Call of Duty mobile</p>
                        <p className="game__container__card__con__card__btn">Enter</p>
                    </div>
                </div>
                <div className="game__container__card__con__card game__container__card__con__gray">
                    <img src={cod1} alt="" />
                    <div>
                        <p>Call of Duty mobile</p>
                        <p className="game__container__card__con__card__btn">Enter</p>
                    </div>
                </div>
                <div className="game__container__card__con__card game__container__card__con__gray">
                    <img src={cod1} alt="" />
                    <div>
                        <p>Call of Duty mobile</p>
                        <p className="game__container__card__con__card__btn">Enter</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Games