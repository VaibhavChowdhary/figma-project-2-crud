import { Box, Divider, Pagination } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
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
import { SomeContext } from '../context/context'
import { studentsData } from "../data/students"
import AddStudent from '../models/AddStudent'

export default function Students() {
    const xyz = useContext(SomeContext);
    const [data, setData] = useState(studentsData);
    const [openAddStudent, setOpenAddStudent] = useState(false);


    const handleAddStudent = () => {
        setOpenAddStudent(true);
    }

    return (
        <>
            <Box sx={{ maxWidth: xyz.openSidebar ? "100%" : "1110px", display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <CustomTypo fontWeight="bold" fontSize="22px" color="#000000">
                                Students List
                            </CustomTypo>
                        </Box>
                        <Box>
                            <img src={filter} alt='filter' width="14px" height="19.25px" style={{ marginRight: "30px", alignSelf: "center" }} />
                            <CustomButton fontSize="14px" color="#FFFFFF" padding="13px 27px 14px 26px" backgroundColor="#FEAF00" onClick={handleAddStudent}>
                                ADD NEW STUDENT
                            </CustomButton>
                        </Box>
                    </Box>
                    <Divider sx={{ color: "#E5E5E5", maxWidth: "1110px" }} />
                    <Table sx={{ maxWidth: "100%" }}>
                        <TableHead>
                            <TableRow sx={{ borderRadius: "8px" }}>
                                <TableCell sx={{ border: "none" }}>
                                </TableCell>
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
                            {data.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#FFFFFF"
                                        , '&:not(:last-child) td, &:not(:last-child) th': { borderBottom: "10px solid #F8F8F8" },
                                    }}
                                >
                                    <TableCell sx={{ border: "none" }}>
                                        <img src="https://media.istockphoto.com/id/1419922260/photo/3d-render-of-a-cat-playing-video-games-with-a-vr-headset.jpg?s=1024x1024&w=is&k=20&c=7GvkQa5vI7Xi_4DZL39dMGZqCLw72oTijNGsiOT_sa4=" style={{ borderRadius: "8px" }} alt="profile pic" width="65px" height="55px" />
                                    </TableCell>
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
                                            {row.enrollNumber}
                                        </CustomTypo>
                                    </TableCell>
                                    <TableCell align="left" sx={{ border: "none" }}>
                                        <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                            {row.dateOfAdmission}
                                        </CustomTypo>
                                    </TableCell>
                                    <TableCell align="center" sx={{ border: "none" }}>
                                        <Box sx={{ display: "flex", gap: "33PX" }}>
                                            <img src={editIcon} alt='view' />
                                            <img src={deleteIcon} alt='view' />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Pagination count={10} color="warning" showFirstButton showLastButton/>
                </Box>
            </Box>
            <AddStudent openAddStudent={openAddStudent} setOpenAddStudent={setOpenAddStudent} />
        </>
    )
}
