import React from 'react'
import Games from '../../components/Home/Games/Games'
import HowToUse from '../../components/Home/HowToUse/HowToUse'
import Video from '../../components/Home/Video/Video'
import './Home.css'

const Home = () => {
    return (
        <div className='home__container'>
            <Games />
            <HowToUse />
            <Video />
        </div>
    )
}

export default Home