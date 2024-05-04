import { AppBar, Box, IconButton, InputAdornment, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import ArrowIcon from "../assets/arrow.png"
import Notification from "../assets/notification.png"
import CustomTextfield from '../CustomComponents/CustomTextfield'
import SearchIcon from '@mui/icons-material/Search';
import { SomeContext } from '../context/context'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const context = useContext(SomeContext);
    const location = useLocation();
    const currentURL = location.pathname;
    if (currentURL === '/dashboard/students') {

    }
    const handleClick = () => {
        context.setOpenSidebar(!context.openSidebar);
    }

    const handleSearchInput = (event) => {
        if (currentURL === '/dashboard/students') {
            if (event.target.value.length > 0) {
                const filteredStudents = context.studentData.filter((student) =>
                    student.name.toLowerCase().includes(event.target.value.toLowerCase())
                );
                if (filteredStudents.length === 0) {
                    // Handle the case where no data matches the search input
                    context.setFilteredData('empty')
                    // You can add additional logic here as needed
                }else{
                    context.setFilteredData(filteredStudents)
                }

            } else {
                context.setFilteredData([])
            }
        }
    }

    return (
        <>
            <Box>
                <AppBar sx={{ maxWidth: context.openSidebar ? "100%" : `calc(100% - 265px)`, height: "60px", backgroundColor: "#FFFFFF", boxShadow: "none", }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <IconButton
                                onClick={handleClick}
                                edge="start"
                                color="#C4C4C4"
                                sx={{ mr: 2 }}
                            >
                                <img src={ArrowIcon} alt="arrow" style={{ transform: context.openSidebar && "rotate(180deg)" }} />
                            </IconButton>
                        </Box>

                        <Box>
                            <CustomTextfield onChange={handleSearchInput} width="212px" height="37px" placeholder="Search..." marginRight="27px" endAdornment={<InputAdornment position="end"><SearchIcon sx={{ color: "#C4C4C4" }} /></InputAdornment>} />
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