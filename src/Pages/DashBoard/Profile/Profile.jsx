import React, { useState } from 'react'
import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import Sidebar from '../../../components/Dashboard/Sidebar';
import './Profile.css'
import { AiFillShopping, AiFillStar } from 'react-icons/ai'
import { BsCashCoin } from 'react-icons/bs'
import { GrGamepad } from 'react-icons/gr'
import { FaUserFriends } from 'react-icons/fa'
import cod1 from '../../../assets/Home/Game/cod1.jpg'


const Profile = () => {
    const [expanded, setExpanded] = useState(!false);

    const expandState = (state) => {
        setExpanded(state);
    };

    return (
        <>
            <div className="AppHead">
                <Navbar expandState={expandState} />
            </div>
            <div className="profileGlass ">
                <Sidebar expandState={expanded} />
                <div className='profile__con'>
                    <div className="profile__head">
                        <div className="profile__title">
                            <img src="https://imgs.search.brave.com/KVpCtRZafiwPSMt_uEM_yZpQyL0qhl5lVLt4IW-EJwU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/NkJBSmlvZmdkV291/dnhWN1RLMEV3SGFI/YSZwaWQ9QXBp" alt="" />
                            <div className='profile__title__text'>
                                <h1>James Parker</h1>
                                <p>Joined 2 months ago</p>

                                <div className="profile__stats__star flex gap-1 p-2">
                                    <AiFillStar className='text-[#FFCC4D]' />
                                    <AiFillStar className='text-[#FFCC4D]' />
                                    <AiFillStar className='text-[#FFCC4D]' />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>

                        <div className="profile__bio">
                            <p>
                                I'm the hero of a thousand stories. I'm a superhero, an assassin a soldier.
                                I've slain dragons and traveled through portals.
                                I am a spartan, a commander. A king.
                                I've saved a thousand worlds and countless more lives. What am I? I'm a gamer.
                            </p>
                        </div>

                        {/* <div className="profile__stats pb-5">
                            <div>
                                <p className='profile__stats__title'>How much made</p>
                                <p className='profile__stats__text'>$1000</p>
                            </div>
                            <div>
                                <p className='profile__stats__title'>Ratings</p>
                                <div className="profile__stats__star flex gap-1 pt-2">
                                    <AiFillStar className='text-[#FFCC4D]' />
                                    <AiFillStar className='text-[#FFCC4D]' />
                                    <AiFillStar className='text-[#FFCC4D]' />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div> */}

                        <div className="profile__stats__card__con">
                            <div className="profile__stats__card">
                                <div className="profile__stats__card__text">
                                    <p>Revenue</p>
                                    <h1>$ 1284</h1>
                                    <span> +5% <p> vs last 28 days</p></span>
                                </div>
                                <div className="profile__stats__card__icon">
                                    <BsCashCoin />
                                </div>
                            </div>
                            <div className="profile__stats__card">
                                <div className="profile__stats__card__text">
                                    <p>Games Sold</p>
                                    <h1>284</h1>
                                    <span> +20% <p> vs last 28 days</p></span>
                                </div>
                                <div className="profile__stats__card__icon">
                                    <GrGamepad />
                                </div>
                            </div>
                            <div className="profile__stats__card">
                                <div className="profile__stats__card__text">
                                    <p>Followers</p>
                                    <h1>157</h1>
                                    <span> +44% <p> vs last 28 days</p></span>
                                </div>
                                <div className="profile__stats__card__icon">
                                    <FaUserFriends />
                                </div>
                            </div>
                            <div className="profile__stats__card">
                                <div className="profile__stats__card__text">
                                    <p>Avaliable Games</p>
                                    <h1>24</h1>
                                    {/* <span> +5% <p> vs last 28 days</p></span> */}
                                </div>
                                <div className="profile__stats__card__icon">
                                    <AiFillShopping />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="profile__game pb-10">
                        <h1>Avaliable Games</h1>

                        <div className="profile__game__category">
                            <p className='bg-[#2A683E]'>Codm</p>
                            <p>Pubg</p>
                            <p>Fornite</p>
                            <p>Apex Legends</p>
                            <p>Clash Royale</p>
                            <p>Warzone</p>
                        </div>

                        <h1>Codm</h1>

                        <div className="profile__game__card">

                            <div className="seller__container__card__con__card">
                                <div className='seller__container__card__con__card__desc cursor-pointer'>
                                    <img src={cod1} alt="" />
                                    <div className="seller__container__card__con__card__desc__text">
                                        <p>Sold 234 account </p>
                                        <p>Made $858</p>
                                    </div>
                                </div>
                                <div className='seller__container__card__con__card__stats'>
                                    <p className='cursor-pointer'>Ashalav</p>
                                    <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                                </div>
                            </div>

                            <div className="seller__container__card__con__card">

                                <div className='seller__container__card__con__card__desc cursor-pointer'>
                                    <img src={cod1} alt="" />
                                    <div className="seller__container__card__con__card__desc__text">
                                        <p>Sold 234 account </p>
                                        <p>Made $858</p>
                                    </div>
                                </div>
                                <div className='seller__container__card__con__card__stats'>
                                    <p className='cursor-pointer'>Ashalav</p>
                                    <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                                </div>
                            </div>
                            <div className="seller__container__card__con__card">

                                <div className='seller__container__card__con__card__desc cursor-pointer'>
                                    <img src={cod1} alt="" />
                                    <div className="seller__container__card__con__card__desc__text">
                                        <p>Sold 234 account </p>
                                        <p>Made $858</p>
                                    </div>
                                </div>
                                <div className='seller__container__card__con__card__stats'>
                                    <p className='cursor-pointer'>Ashalav</p>
                                    <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                                </div>
                            </div>
                            <div className="seller__container__card__con__card">

                                <div className='seller__container__card__con__card__desc cursor-pointer'>
                                    <img src={cod1} alt="" />
                                    <div className="seller__container__card__con__card__desc__text">
                                        <p>Sold 234 account </p>
                                        <p>Made $858</p>
                                    </div>
                                </div>
                                <div className='seller__container__card__con__card__stats'>
                                    <p className='cursor-pointer'>Ashalav</p>
                                    <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile