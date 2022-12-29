import React from 'react'
import cod1 from '../../../assets/Home/Game/cod1.jpg'
import './TrxeCard.css'

function TrxCard({ type }) {

    return (
        <>
            <div className="gamecard__container__card__con__card">
                <img src={cod1} alt="" />
                <div>
                    <p>Call of Duty mobile</p>
                    <p className={`gamecard__container__card__con__card__btn ${type && "gamecard__container__card__con__gray"}`}>Enter</p>
                </div>
            </div>
        </>
    )
}

export default TrxCard