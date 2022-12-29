import React from 'react'
import Games from '../../components/Home/Games/Games'
import HowToUse from '../../components/Home/HowToUse/HowToUse'
import './Home.css'

const Home = () => {
    return (
        <div className='home__container'>
            <Games />
            <HowToUse />
        </div>
    )
}

export default Home