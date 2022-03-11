import React from 'react'
import useHooks from '../hooks/useHooks'
import a_banner from '../images/night_view.jpg'

const About = () => {

    useHooks();

    return (
        <div className="about_content">
            <div className="sec_01">
                <div className="a_holder">
                    <div className="a_cnt1">
                        <h3>Hi, I'm Leonard Tetrick</h3>
                        <p>I'm from Indonesia. I major in Information Technology : Mobile and Web. Besides that, my hobby is editing, creating, designing or anything related to art, so I created this website so that I can save, share the work that I have made and also as a portfolio.</p>
                    </div>
                </div>
                <div className="a_holder">
                    <div className="a_cnt">
                        {/* <img className="a_banner" src={a_banner} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
