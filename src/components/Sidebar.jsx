import { Box, Button, Icon, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext, useState } from 'react'
import CustomTypo from "../CustomComponents/CustomTypo";
import homeIcon from "../assets/home.png"
import courseIcon from "../assets/courseIcon.png"
import studentsIcon from "../assets/studentsIcon.png"
import paymentIcon from "../assets/paymentIcon.png"
import reportIcon from "../assets/reportIcon.png"
import settingIcon from "../assets/settingIcon.png"
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { SomeContext } from '../context/context';

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const name = "Vaibhav G C";
    const admin = "Admin";
    const navigate = useNavigate()
    const options = [
        { icon: homeIcon, text: 'Home', link: "home" },
        { icon: courseIcon, text: 'Course', link: "course" },
        { icon: studentsIcon, text: 'Students', link: "students" },
        { icon: paymentIcon, text: 'Payment', link: "payments" },
        { icon: reportIcon, text: 'Report', link: "report" },
        { icon: settingIcon, text: 'Settings', link: "settings" },
    ];

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    }

    const xyz = useContext(SomeContext);


    return (
        <>
            <Box sx={{ width: "270px", height: "100vh", backgroundColor: "#F2EAE1", display: xyz.openSidebar ? "none" : "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ textAlign: "center", marginTop: "18px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "20px", borderLeft: "4px solid #F8D442", paddingLeft: "12.5px", textShadow: "1px 4px px lightgrey" }}>
                        CRUD OPERATIONS
                    </span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", marginTop: "54px", gap: 1 }}>
                    <Box>
                        <img src='https://wallpapers.com/images/high/cartoon-profile-pictures-7snemqada9e47jj4.webp' style={{ borderRadius: "50%" }} alt='profile' width="150px" height="150px" />
                    </Box>
                    <Box>
                        <CustomTypo fontSize={17} color="#000000" fontWeight="bold">
                            {name}
                        </CustomTypo>
                    </Box>
                    <Box>
                        <CustomTypo fontSize={14} color="#FEAF00" fontWeight="bold">
                            {admin}
                        </CustomTypo>
                    </Box>
                </Box>
                <Box sx={{ width: "193px", height: "497px", display: "flex", flexDirection: "column", marginTop: "80px", alignItems: "center", justifyContent: "space-between" }}>
                    <Box>
                        <List>
                            {options.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Link to={`${item.link}`} style={{ textDecoration: "none", fontSize: "14px", color: "#000000", fontWeight: "600" }} >
                                        <ListItem button sx={{ backgroundColor: index === activeIndex ? "#FEAF00" : "", width: "193px", height: "41px", borderRadius: "4px", display: "flex", justifyContent: "start", paddingLeft: "41px", }} onClick={() => handleButtonClick(index)}
                                        >
                                            <img src={item.icon} alt='option' style={{ paddingRight: "15px" }} />
                                            <CustomTypo >
                                                {item.text}
                                            </CustomTypo>
                                        </ListItem>
                                    </Link>
                                </React.Fragment>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Button onClick={() => navigate('/login')} sx={{ backgroundColor: "transparent", fontSize: "14px", fontWeight: "bold", color: "#000000" }} endIcon={<LogoutIcon sx={{ color: "#000000" }} />} >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}
