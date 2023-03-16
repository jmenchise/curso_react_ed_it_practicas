import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UserDetail from '../pages/UserDetail'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user/:id' element={<UserDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas