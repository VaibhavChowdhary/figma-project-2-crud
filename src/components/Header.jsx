import { AppBar, Box, IconButton, InputAdornment, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import ArrowIcon from "../assets/arrow.png"
import Notification from "../assets/notification.png"
import CustomTextfield from '../CustomComponents/CustomTextfield'
import SearchIcon from '@mui/icons-material/Search';
import { SomeContext } from '../context/context'

const Header = () => {
    const xyz = useContext(SomeContext);
    console.log("header mounted")
    const handleClick = () => {
        xyz.setOpenSidebar(!xyz.openSidebar);
    }
    return (
        <>
            <Box>
                <AppBar sx={{ maxWidth: xyz.openSidebar ? "100%" : `calc(100% - 265px)`, height: "60px", backgroundColor: "#FFFFFF", boxShadow: "none", }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <IconButton
                                onClick={handleClick}
                                edge="start"
                                color="#C4C4C4"
                                sx={{ mr: 2 }}
                            >
                                <img src={ArrowIcon} alt="arrow" style={{ transform: xyz.openSidebar && "rotate(180deg)" }} />
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

export default Header