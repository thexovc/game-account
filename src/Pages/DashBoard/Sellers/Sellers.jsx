import './Sellers.css'
import { AiFillStar } from 'react-icons/ai'
import cod1 from '../../../assets/Home/Game/cod1.jpg'


const Sellers = () => {
    return (
        <div className='seller__container'>
            <h1>Top Ranking Sellers</h1>
            <div className="seller__container__carousel">
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className={`seller__container__card__con__card__btn`}><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className={`seller__container__card__con__card__btn`}><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className={`seller__container__card__con__card__btn`}><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className={`seller__container__card__con__card__btn`}><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>

            </div>
            <div className="seller__container__sellers">
                <div className="seller__container__sellers__left">
                    <h1>New Sellers</h1>
                    <div className='seller__container__sellers__list'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>Income: $677</p>
                        <p>4.5star</p>
                    </div>
                    <div className='seller__container__sellers__list'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>Income: $677</p>
                        <p>4.5star</p>
                    </div>
                    <div className='seller__container__sellers__list'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>Income: $677</p>
                        <p>4.5star</p>
                    </div>
                    <div className='seller__container__sellers__list'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>Income: $677</p>
                        <p>4.5star</p>
                    </div>
                    <div className='seller__container__sellers__list'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>Income: $677</p>
                        <p>4.5star</p>
                    </div>
                </div>

                <div className="seller__container__sellers__right">
                    <button>Become a seller</button><br />
                    <button>View your seller page</button>
                </div>
            </div>
        </div>
    )
}

export default Sellers