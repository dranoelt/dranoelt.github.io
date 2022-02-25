import React from 'react'
import home_header from '../images/home_header.png';
import useHooks from "../hooks/useHooks";

const Home = () => {

    useHooks();

    return (
        <div className="home_content">
            <img className="home_banner" src={home_header} alt="" />
            <h2>Leonard Tetrick</h2>
            <p>Hello, I’m Leonard Tetrick. This website was used to store, share any of my creation and as my portfolio.
            <br/>Feel Free to Visit.</p>
            <span/>
            <p>Recent Art</p>
        </div>
    )
}

export default Home