import { Box } from '@mui/material'
import React from 'react'
import CustomTypo from "../CustomComponents/CustomTypo"

export default function CustomDisplayCard({ image, text, count, imgColor, bgColor, height, width }) {
    return (
        <>
            <Box sx={{ width: "255px", height: "157px", background: bgColor, padding: "20px", gap: 1.5, borderRadius: "8px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <img src={image} alt="alternate" width={width} height={height} color={imgColor} />
                    <CustomTypo fontSize="14px" color="#6C6C6C">
                        {text}
                    </CustomTypo>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "right", marginTop: "30px" }}>
                    <CustomTypo fontWeight="bold" fontSize="30px" color="#000000">
                        {count}
                    </CustomTypo>
                </Box>
            </Box>
        </>
    )
}
