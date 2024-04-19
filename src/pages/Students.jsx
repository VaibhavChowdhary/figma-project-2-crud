import { Box, Divider } from '@mui/material'
import React from 'react'
import CustomTypo from '../CustomComponents/CustomTypo'
import filter from "../assets/filter.png"
import CustomButton from "../CustomComponents/CustomButton"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/deleteIcon.png";


export default function Students() {
    const rows = [
        { name: "vaibhav", email: "vaibhav@gmail.com", phone: "1234567890", enrollNo: "1234567305477760", dateOfAdmission: "8 Dec, 2021" },
        { name: "vaibhav", email: "vaibhav@gmail.com", phone: "1234567890", enrollNo: "1234567305477760", dateOfAdmission: "8 Dec, 2021" },
        { name: "vaibhav", email: "vaibhav@gmail.com", phone: "1234567890", enrollNo: "1234567305477760", dateOfAdmission: "8 Dec, 2021" }
    ]
    return (
        <>
            <Box sx={{ width: "100%", padding: "20px 30px 59px 30px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <CustomTypo fontWeight="bold" fontSize="22px" color="#000000">
                        Students List
                    </CustomTypo>
                    <Box SX={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                        <img src={filter} alt='filter' width="14px" height="19.25px" />
                        <CustomButton fontSize="14px" color="#FFFFFF" padding="13px 27px 14px 26px">
                            ADD NEW STUDENT
                        </CustomButton>
                    </Box>
                </Box>
                <Divider sx={{ color: "#E5E5E5", marginTop: "20px", marginBottom: "18px" }} />
                <Table sx={{ minWidth: "1300px" }}>
                    <TableHead>
                        <TableRow sx={{ borderRadius: "8px" }}>
                            <TableCell sx={{ border: "none" }}>
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Name
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }}>
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Email
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }} >
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Phone
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }} >
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Enroll Number
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }}>
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Date of admission
                                </CustomTypo>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#FFFFFF" }}
                            >
                                <TableCell sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                        {row.name}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                        {row.email}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                        {row.phone}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                        {row.enrollNo}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                        {row.dateOfAdmission}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="center" sx={{ border: "none" }}>
                                    <Box sx={{ display: "flex", gap: 2 }}>
                                        <img src={editIcon} alt='view' />
                                        <img src={deleteIcon} alt='view' />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>
    )
}
