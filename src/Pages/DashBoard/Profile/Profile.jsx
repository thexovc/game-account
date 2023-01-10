import React, { useState } from 'react'
import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import Sidebar from '../../../components/Dashboard/Sidebar';
import './Profile.css'
import { AiFillStar } from 'react-icons/ai'
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
                            </div>
                        </div>

                        <div className="profile__bio">
                            <p>
                                ameconsectetur adipiscing elit. ac aliquet odiomattis.Classaptent taciti sociosqu ad litoratorquent per conubia nostra, Lorem ipsum
                                ameconsectetur adipiscing elit. ac aliquet odiomattis.Classaptent taciti sociosqu ad litoratorquent per conubia nostra, Lorem ipsum
                                ameconsectetur adipiscing elit. ac aliquet odiomattis.Classaptent taciti sociosqu ad litoratorquent per conubia nostra, Lorem ipsum
                            </p>
                        </div>

                        <div className="profile__stats pb-5">
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
                        </div>

                    </div>

                    <div className="profile__game pb-10">
                        <h1>Avaliable Games</h1>
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
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile