import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const useTracking = () => {
    const location = useLocation();
    useEffect(() => {console.log(location)}, [location]);
}

export default useTracking;