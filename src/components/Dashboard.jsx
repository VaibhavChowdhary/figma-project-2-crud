import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { SomeContext } from '../context/context'
import { Route, Routes } from 'react-router-dom';

export default function Dashboard() {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <div style={{ display:'flex' }}>
            <SomeContext.Provider value={{ openSidebar, setOpenSidebar }}>
                <Sidebar />
                <Header />
            </SomeContext.Provider>

                <Routes>
                    <Route path='/home' element={<h1>Home</h1>} />
                    <Route path='/students' element={<h1>Students</h1>} />
                    <Route path='/payments' element={<h1>Payments</h1>} />
                </Routes >
            </div>


        </>
    )
}
