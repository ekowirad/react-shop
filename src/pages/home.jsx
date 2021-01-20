
import React from 'react'
import BannerHome from '../components/banner-home'
import { DIRECTORY_DATA } from '../data/directory'
// import '../sass/pages/home.scss'

export default function HomePage() {
    return (
        <div className="inner-container">
            <div className="fluid-container">
                {
                    DIRECTORY_DATA.map((item, i) => {
                        return <BannerHome item={item} key={i}></BannerHome>
                    })
                }
            </div>
        </div>
    )
}