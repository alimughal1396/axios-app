import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Dasboard from './Dashboard'
import UserList from './UserList'
import PostList from './PostList'

export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Dasboard />} />
                    <Route path='/userlist' element={<UserList />} />
                    <Route path='/postlist' element={<PostList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
