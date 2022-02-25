import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Gl3d from './Gl3d'
import GlPs from './GlPs'
import GlWeb from './GlWeb'


const Gallery = () => {
    
    
    return (
            <div className='gallery_content'>
                <p className="h3-header">Digital Art</p>
                <div className="mini-nav">
                    <ul>
                        <li className="mini-nav nav_btn">
                            <NavLink to={`Photoshop`} className={({isActive}) => (isActive ? "active" : "")}>Photoshop</NavLink>
                        </li>
                        <li className="mini-nav nav_btn">
                            <NavLink  to={`3D`} className={({isActive}) => (isActive ? "active" : "")}>3D</NavLink>
                        </li>
                        <li className="mini-nav nav_btn">
                            <NavLink  to={`Website`}  className={({isActive}) => (isActive ? "active" : "")}>Website</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='subcontent'>
                    <Routes>
                        <Route path={`:mininavId`} element={<Crouter/>}></Route>
                    </Routes>
                </div>
            </div>
    );

    function Crouter() {
        let { mininavId } = useParams();
        let Id = mininavId;
        console.log("aa"+Id)
        if (Id === "Photoshop")
            return <GlPs/>;
        else if ( Id === "3D")
            return <Gl3d/>;
        else if ( Id === "Website")
            return <GlWeb/>;
    }
}

export default Gallery;
