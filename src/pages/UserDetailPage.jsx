import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserDetail from '../components/UserDetail'

const UserDetailPage = () => {

    const navigate = useNavigate()
    
    return (
        <div>
            <button className='btn btn-danger' onClick={() => navigate(-1)}>Ir al Inicio</button>
            <UserDetail/>
        </div>
    )
}

export default UserDetailPage
