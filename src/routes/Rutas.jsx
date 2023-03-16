import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UserDetailPage from '../pages/UserDetailPage'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user/:id' element={<UserDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas