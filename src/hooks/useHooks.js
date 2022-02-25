import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHooks = () => {


    // const location = useLocation()
    // useEffect(() => {console.log('handle route change here', location)}, [location])

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        doc: undefined
      });

    useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            doc: Math.min(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                  )
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []); 

    const element = document.querySelector('.footer_warp');
    if (windowSize.height>windowSize.doc) {
        return element.classList.add('footer_btm');
    }
    if (windowSize.height<=windowSize.doc && document.querySelector('.footer_btm')) {
        return element.classList.remove('footer_btm'); 
    }
}

export default useHooks;