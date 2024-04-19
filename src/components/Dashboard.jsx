import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { SomeContext } from '../context/context'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from '../pages/Home';
import Payment from '../pages/Payment';

export default function Dashboard() {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: "start", backgroundColor: "#F8F8F8",height:"100vh" }}>
                <SomeContext.Provider value={{ openSidebar, setOpenSidebar }}>
                    <Sidebar />
                    <Header />
                </SomeContext.Provider>
                <Box sx={{ height: "50vh", width: openSidebar ? "100vw" : "80vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/course' element={<h1>Course</h1>} />
                        <Route path='/students' element={<h1>Students</h1>} />
                        <Route path='/payments' element={<Payment />} />
                        <Route path='/report' element={<h1>Report</h1>} />
                        <Route path='/settings' element={<h1>Settings</h1>} />
                    </Routes >
                </Box>
            </Box>
        </>
    )
}
