import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { SomeContext } from '../context/context'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from '../pages/Home';

export default function Dashboard() {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: "start" }}>
                <SomeContext.Provider value={{ openSidebar, setOpenSidebar }}>
                    <Sidebar />
                    <Header />
                </SomeContext.Provider>
                <Box sx={{ height: "30vh", width: openSidebar ? "100vw" : "80vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/course' element={<h1>Course</h1>} />
                        <Route path='/students' element={<h1>Students</h1>} />
                        <Route path='/payments' element={<h1>Payments</h1>} />
                        <Route path='/report' element={<h1>Report</h1>} />
                        <Route path='/settings' element={<h1>Settings</h1>} />
                    </Routes >
                </Box>
            </Box>
        </>
    )
}
