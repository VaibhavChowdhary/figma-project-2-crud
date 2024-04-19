import React from 'react'
import CustomDisplayCard from '../CustomComponents/CustomDisplayCard'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import studentIcon from "../assets/customDisplayCard/StudentCap.png"
import courseIcon from "../assets/customDisplayCard/coursesIcon.png"
import paymentsIcon from "../assets/customDisplayCard/paymentsIcon.png"
import usersIcon from "../assets/customDisplayCard/usersIcon.png"
import CustomTypo from '../CustomComponents/CustomTypo';

export default function Home() {

  return (
    <>
      <Grid container spacing={1} sx={{ marginLeft: "30px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <CustomDisplayCard image={studentIcon} text="Students" count="243" bgColor="#F0F9FF" height="48px" width="38px" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomDisplayCard image={courseIcon} text="Course" count="13" bgColor="#FEF6FB" height="28px" width="35px" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomDisplayCard image={paymentsIcon} text="Payments" count={<span><span style={{ fontSize: "18px", fontWeight: "bold" }}>INR{" "}</span> 556,000</span>} bgColor="#FEFBEC" height="35px" width="40px" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomDisplayCard image={usersIcon} text={<span style={{ color: "#FFFFFF" }}>Users</span>} count="3" bgColor="linear-gradient(to bottom right, #FEAF00 0% 40%, #F8D442)" height="34px" width="34px" />
        </Grid>
      </Grid>
    </>
  )
}
