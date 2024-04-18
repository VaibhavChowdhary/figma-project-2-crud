import { Box } from '@mui/material'
import React from 'react'
import CustomTypo from "../CustomComponents/CustomTypo";
export default function Sidebar() {
    const name = "Vaibhav G C";
    const admin = "Admin"
    return (
        <>
            <Box sx={{ width: "270px", height: "100vh", backgroundColor: "#F2EAE1", display: "flex", flexDirection: "column",alignItems:"center" }}>
                <Box sx={{ textAlign: "center",marginTop:"18px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "20px", borderLeft: "4px solid #F8D442", paddingLeft: "12.5px", textShadow: "1px 4px px lightgrey" }}>
                        CRUD OPERATIONS
                    </span>
                </Box>
                <Box sx={{ display: "flex",flexDirection:"column", justifyContent: "space-around",alignItems:"center",marginTop:"54px",gap:1.5 }}>
                    <Box>

                    <img src='https://wallpapers.com/images/high/cartoon-profile-pictures-7snemqada9e47jj4.webp' style={{ borderRadius: "50%" }} alt='profile' width="150px" height="150px" />
                    </Box>
                    <Box>z
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
            </Box>
        </>
    )
}
