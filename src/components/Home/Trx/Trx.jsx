import React from 'react'
import './Trx.css'
import GameCard from './GameCard'

const Trx = () => {
    return (
        <div className="game__container">
            <div className="game__container__title">
                <h1>Transactions</h1>
            </div>

            <div className="game__container__card__con">

                <TrxCard />

            </div>

        </div>
    )
}

export default Trx