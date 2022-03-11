import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHooks = () => {


    // const location = useLocation()
    // useEffect(() => {console.log('handle route change here', location)}, [location])

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        doc: undefined,
        doc2: undefined,
        height2: undefined
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
                  ),
            doc2: Math.min(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                  ) + 49,
            height2: window.innerHeight + 49
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []); 

    const element = document.querySelector('.footer_warp');
    console.log(windowSize.height," ", windowSize.height2, " ", windowSize.doc, " ", windowSize.doc2)
    if (windowSize.height > windowSize.doc) {
      return element.classList.add('footer_btm');
    }
    if (document.querySelector('.footer_btm') && windowSize.height <= windowSize.doc2) {
      return element.classList.remove('footer_btm'); 
    }
    
    
    
}

export default useHooks;