import { useState } from 'react'
import { axiosClient } from '../axios';

const useJPH = () => {

    const [data, setData] = useState([]);
    
    const getData = async (path) => {
        try {
            const response = await axiosClient.get(path);
            console.log(`${path.slice(1)}`,response.data);
            setData(response);
        } catch (error) {
            console.log(error.message);
        };
    }
    
    return {
        data,
        getData
    }
}

export default useJPH