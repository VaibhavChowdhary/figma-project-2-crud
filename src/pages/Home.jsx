import React from 'react'
import CustomDisplayCard from '../CustomComponents/CustomDisplayCard'
import { Box } from '@mui/material'
import studentIcon from "../assets/customDisplayCard/StudentCap.png"
import courseIcon from "../assets/customDisplayCard/coursesIcon.png"
import paymentsIcon from "../assets/customDisplayCard/paymentsIcon.png"
import usersIcon from "../assets/customDisplayCard/usersIcon.png"


export default function Home() {

  return (
    <>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <CustomDisplayCard image={studentIcon} text="Students" count="243" bgColor="#F0F9FF" height="48px" width="38px" />
        <CustomDisplayCard image={courseIcon} text="Course" count="13" bgColor="#FEF6FB" height="28px" width="35px" />
        <CustomDisplayCard image={paymentsIcon} text="Payments" count={<span><span style={{ fontSize: "18px", fontWeight: "bold" }}>INR{" "}</span> 556,000</span>} bgColor="#FEFBEC" height="35px" width="40px" />
        <CustomDisplayCard image={usersIcon} text={<span style={{ color: "#FFFFFF" }}>Users</span>} count="3" bgColor="linear-gradient(to bottom right, #FEAF00 0% 40%, #F8D442)" height="34px" width="34px" />
      </Box>
    </>
  )
}
