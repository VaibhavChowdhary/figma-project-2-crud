import { Box, Divider, MenuItem, Select } from '@mui/material'
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
import AddStudent from '../models/AddStudent'
import DeleteStudent from '../models/DeleteStudent'
import CustomPagination from '../CustomComponents/CustomPagination'
import { studentTableHeadData } from "../utils/constants"
import { showSortButton, hideSortButton, sortByName, sortByDate } from "../utils/helpers"

export default function Students() {
    const context = useContext(SomeContext);
    const [currPageNo, setCurrPageNo] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [emptyData, setEmptyData] = useState(false)
    const totalPages = Math.ceil(context.studentData.length / itemsPerPage);
    const [openAddStudent, setOpenAddStudent] = useState(false);
    const [openDeleteStudent, setOpenDeleteStudent] = useState(false);
    const [deleteUser, setDeleteUser] = useState();
    const startIndex = (currPageNo - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, context.studentData.length);
    const [currentPageData, setCurrentPageData] = useState(context.studentData);


    const handleAddStudent = () => {
        setOpenAddStudent(true);
    }

    const handleDeleteStudent = (student) => {
        setOpenDeleteStudent(true);
        setDeleteUser(student)
    }

    if (currentPageData.slice(startIndex, endIndex).length === 0 && currPageNo > 1) {
        setCurrPageNo(currPageNo - 1)
    }

    const handlePageChange = (value) => {
        setCurrPageNo(value);
    };

    const handleItemsPerPage = (event) => {
        setItemsPerPage(event.target.value);
        setCurrPageNo(1)
        handlePageChange(1)
    };

    const sortName = () => {
        const sortedNameData = sortByName(context.studentData, 'asc')
        setCurrentPageData(sortedNameData)
    }

    const sortDate = () => {
        const sortedDateData = sortByDate(context.studentData, 'asc')
        setCurrentPageData(sortedDateData)
    }

    return (
        <>
            <Box sx={{ maxWidth: context.openSidebar ? "100%" : "1110px", display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
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
                    <Divider sx={{ color: "#E5E5E5", maxWidth: "1110px", marginTop: "11.5px" }} />
                    <Table sx={{ maxWidth: "100%" }}>
                        <TableHead>
                            <TableRow sx={{ borderRadius: "8px" }}>
                                <TableCell sx={{ border: "none" }}>
                                </TableCell>
                                <TableCell sx={{ border: "none", display: "flex", justifyContent: "space-between", "&:hover": { cursor: "pointer" } }} onMouseEnter={() => showSortButton("name")} onMouseLeave={() => hideSortButton("name")} onClick={() => sortName()}>
                                    <CustomTypo color="#ACACAC" fontSize="12px">Name</CustomTypo>
                                    <img src={filter} alt="filter" width="12px" height="15.25px" style={{ marginRight: "30px", alignSelf: "center", display: "none" }} id="name" />
                                </TableCell>

                                <TableCell sx={{ border: "none", "&:hover": { cursor: "pointer" } }}>
                                    <CustomTypo color="#ACACAC" fontSize="12px">Email</CustomTypo>
                                </TableCell>

                                <TableCell sx={{ border: "none", "&:hover": { cursor: "pointer" } }}>
                                    <CustomTypo color="#ACACAC" fontSize="12px">Phone</CustomTypo>
                                </TableCell>

                                <TableCell sx={{ border: "none", "&:hover": { cursor: "pointer" } }}>
                                    <CustomTypo color="#ACACAC" fontSize="12px">Enroll Number</CustomTypo>
                                </TableCell>

                                <TableCell sx={{ border: "none", display: "flex", justifyContent: "space-between", "&:hover": { cursor: "pointer" } }} onMouseEnter={() => showSortButton("date")} onMouseLeave={() => hideSortButton("date")} onClick={() => sortDate()}>
                                    <CustomTypo color="#ACACAC" fontSize="12px">Date of Admission</CustomTypo>
                                    <img src={filter} alt="filter" width="12px" height="15.25px" style={{ marginRight: "30px", alignSelf: "center", display: "none" }} id="date" />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentPageData.slice(startIndex, endIndex).map((student, index) => (
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
                                            {student.name}
                                        </CustomTypo>
                                    </TableCell>
                                    <TableCell align="left" sx={{ border: "none" }}>
                                        <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                            {student.email}
                                        </CustomTypo>
                                    </TableCell>
                                    <TableCell align="left" sx={{ border: "none" }}>
                                        <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                            {student.phone}
                                        </CustomTypo>
                                    </TableCell>
                                    <TableCell align="left" sx={{ border: "none" }}>
                                        <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                            {student.enrollNumber}
                                        </CustomTypo>
                                    </TableCell>
                                    <TableCell align="left" sx={{ border: "none" }}>
                                        <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                            {student.dateOfAdmission}
                                        </CustomTypo>
                                    </TableCell>
                                    <TableCell align="center" sx={{ border: "none" }}>
                                        <Box sx={{ display: "flex", gap: "33PX" }}>
                                            <img src={editIcon} alt='view' style={{ cursor: "pointer" }} />
                                            <img src={deleteIcon} alt='view' style={{ cursor: "pointer" }} onClick={() => handleDeleteStudent(student)} />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomTypo>Page No: {currPageNo}</CustomTypo>
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                        <CustomPagination
                            count={totalPages}
                            handlePageChange={handlePageChange}
                        />
                    </Box>
                    <Box>
                        <Select
                            sx={{ width: "200px", height: "30px" }}
                            value={itemsPerPage}
                            onChange={handleItemsPerPage}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Box>
            <AddStudent openAddStudent={openAddStudent} setOpenAddStudent={setOpenAddStudent} />
            <DeleteStudent openDeleteStudent={openDeleteStudent} setOpenDeleteStudent={setOpenDeleteStudent} userToDelete={deleteUser} />
        </>
    )
}
