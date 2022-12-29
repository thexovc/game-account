import React from 'react'
import './Games.css'
import cod1 from '../../../assets/Home/Game/cod1.jpg'
import GameCard from './GameCard'

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

                <GameCard />
                <GameCard type="coming" />
                <GameCard type="coming" />
                <GameCard type="coming" />
                <GameCard type="coming" />


            </div>

        </div>
    )
}

export default Games