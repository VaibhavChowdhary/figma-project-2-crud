import { AppBar, Box, IconButton, InputAdornment, Toolbar } from '@mui/material'
import React from 'react'
import ArrowIcon from "../assets/arrow.png"
import Notification from "../assets/notification.png"
import CustomTextfield from '../CustomComponents/CustomTextfield'
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    const handleClick =()=>{
        console.log("hello")
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ width: "1170px", height: "60px", backgroundColor: "#FFFFFF", boxShadow: "none" }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>

                            <IconButton
                            onClick={handleClick}
                                edge="start"
                                color="#C4C4C4"
                                sx={{ mr: 2 }}
                            >
                                <img src={ArrowIcon} alt="arrow" />
                            </IconButton>
                        </Box>

                        <Box>
                            <CustomTextfield width="212px" height="37px" placeholder="Search..." marginRight="27px" endAdornment={<InputAdornment position="end"><SearchIcon sx={{ color: "#C4C4C4" }} /></InputAdornment>} />
                            <IconButton

                                edge="end"
                                color="#C4C4C4"
                                sx={{ mr: 2 }}
                            >
                                <img src={Notification} alt="arrow" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
