import React from 'react'
import iu from '../images/iu.jpg'
import useHooks from "../hooks/useHooks"

const Gl3d = () => {
    useHooks();
    return (
        <div className='subcontent_3d'>
            <p>3dddddd</p>
            <div className='item_cardbox'>
                <div className='item_holder'>
                    <img src={iu} alt=""  className='photo'/>
                    <p>1080x1920</p>
                </div>
                <div className='item_btn'>
                    <a href="/assets/images/Wallpaper Pikachu 1.jpg" className='down_btn' download onload="textInfo()">Download</a>
                </div>
            </div>
            <div className='item_cardbox'>
                <div className='item_holder'>
                    <img src={iu} alt=""  className='photo'/>
                    <p>1080x1920</p>
                </div>
                <div className='item_btn'>
                    <a href="/assets/images/Wallpaper Pikachu 1.jpg" className='down_btn' download onload="textInfo()">Download</a>
                </div>
            </div>
            <div className='item_cardbox'>
                <div className='item_holder'>
                    <img src={iu} alt=""  className='photo'/>
                    <p>1080x1920</p>
                </div>
                <div className='item_btn'>
                    <a href="/assets/images/Wallpaper Pikachu 1.jpg" className='down_btn' download onload="textInfo()">Download</a>
                </div>
            </div>
            <div className='item_cardbox'>
                <div className='item_holder'>
                    <img src={iu} alt=""  className='photo'/>
                    <p>1080x1920</p>
                </div>
                <div className='item_btn'>
                    <a href="/assets/images/Wallpaper Pikachu 1.jpg" className='down_btn' download onload="textInfo()">Download</a>
                </div>
            </div>
            <div className='item_cardbox'>
                <div className='item_holder'>
                    <img src={iu} alt=""  className='photo'/>
                    <p>1080x1920</p>
                </div>
                <div className='item_btn'>
                    <a href="/assets/images/Wallpaper Pikachu 1.jpg" className='down_btn' download onload="textInfo()">Download</a>
                </div>
            </div>
        </div>
    )
}

export default Gl3d
