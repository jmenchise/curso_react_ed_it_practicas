import React, { useEffect } from 'react'
import useJPH from '../hooks/useJPH'


const Home = () => {

    const { getData } = useJPH();
    
    useEffect(() => {
        getData('/users');
    }, [])
    

    return (
        <div>Home</div>
    )
}

export default Home