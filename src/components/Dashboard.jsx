import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'

export default function Dashboard() {
    return (
        <>
            <Box>
                <Sidebar />
                <Header />
            </Box>
        </>
    )
}
