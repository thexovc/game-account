import React from 'react'
import cod1 from '../../../assets/Home/Game/cod1.jpg'
import './TrxCard.css'

function TrxCard() {

    return (
        <>
            <div className="trxcard__container__card__con__card">
                <img src={cod1} alt="" />
                <div>
                    <p>Ancraka sold for $79</p>
                    <p>Legendary Mystic grade AK117 Lava Edition</p>
                </div>
            </div>
        </>
    )
}

export default TrxCard