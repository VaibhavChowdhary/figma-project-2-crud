import { Box, Divider, MenuItem, Select, TableContainer } from '@mui/material'
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
import { showSortButton, hideSortButton, sortByName, sortByDate, formatDate } from "../utils/helpers"
import { validateInfo } from '../utils/validate';
import CustomTextfield from '../CustomComponents/CustomTextfield'

export default function Students({ studentData }) {
    const context = useContext(SomeContext);
    const [currPageNo, setCurrPageNo] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [validationError, setValidationError] = React.useState([])
    const [emptyData, setEmptyData] = useState(false)
    const [editField, setEditField] = useState(null)
    const [userAlreadyExists, setUserAlreadyExists] = useState(false)
    const [rowData, setRowData] = useState({ id: null, name: null, email: null, phone: null, enrollNumber: null, dateOfAdmission: null });
    let totalPages;
    if (context.filteredData.length > 0) {
        totalPages = Math.ceil(context.filteredData.length / itemsPerPage);
    } else {
        totalPages = Math.ceil(studentData.length / itemsPerPage);
    }
    const [openAddStudent, setOpenAddStudent] = useState(false);
    const [openDeleteStudent, setOpenDeleteStudent] = useState(false);
    const [deleteUser, setDeleteUser] = useState();
    const startIndex = (currPageNo - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, studentData.length);
    const [currentPageData, setCurrentPageData] = useState(context.studentData);

    const handleEditStudent = (student) => {
        setEditField(student.id);
        setRowData(
            {
                id: student.id,
                name: student.name,
                email: student.email,
                phone: student.phone,
                enrollNumber: student.enrollNumber,
                dateOfAdmission: student.dateOfAdmission
            }
        )
    }
    useEffect(() => {
        if (context.filteredData.length > 0 && context.filteredData !== "empty") {
            setEmptyData(false)
            setCurrentPageData(context.filteredData)
        } else if (context.filteredData === "empty" || context.studentData.length === 0) {
            setEmptyData(true)
        }
        else {
            setEmptyData(false)
            setCurrentPageData(context.studentData)
        }
    }, [context])

    useEffect(() => {
        if (currentPageData.slice(startIndex, endIndex).length === 0 && currPageNo > 1) {
            setCurrPageNo(currPageNo - 1);
        } else if (currentPageData.slice(startIndex, endIndex).length === 0 && currPageNo === 1) {
            setEmptyData(true);
        }
    }, [currentPageData, currPageNo, itemsPerPage, startIndex, endIndex,]);



    const handleEditInputChange = (e, student) => {
        const { name, value } = e.target;
        setRowData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    function isEmailAlreadyExistsForOtherUser(arrayOfObjects, providedEmail, userId) {
        for (let obj of arrayOfObjects) {
            if (obj.email === providedEmail && obj.id !== userId) {
                return true;
            }
        }
        return false;
    }

    const updateStudent = (student) => {
        context.setStudentData((prevData) => {
            return prevData.map((eachStudent) => {
                if (eachStudent.id === student.id) {
                    const updatedStudent = {
                        ...rowData,
                        name: rowData.name,
                        email: rowData.email,
                        phone: rowData.phone,
                        enrollNumber: rowData.enrollNumber,
                        dateOfAdmission: formatDate(rowData.dateOfAdmission),
                    };
                    try {
                        const validateProvidedInfo = validateInfo(updatedStudent);
                        if (validateProvidedInfo) {
                            setValidationError([])
                            const userExists = isEmailAlreadyExistsForOtherUser(studentData, rowData.email, rowData.id)
                            if (!userExists) {
                                setEditField(null);
                                setUserAlreadyExists(false)
                                return updatedStudent;
                            } else {
                                setUserAlreadyExists(true)
                                throw new Error("User with same email ALREADY exists!!")
                            }
                        }
                    } catch (error) {
                        setValidationError(error.message.split(","))
                        console.log(error.message)
                    }
                }
                return eachStudent;
            });
        });
    };

    const handlePageChange = (value) => {
        setCurrPageNo(value);
    };

    const handleItemsPerPage = (event) => {
        setItemsPerPage(event.target.value);
        setCurrPageNo(1)
        handlePageChange(1)
    };


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
                            <CustomButton fontSize="14px" color="#FFFFFF" padding="13px 27px 14px 26px" backgroundColor="#FEAF00" onClick={() => { if (editField) return; setOpenAddStudent(true) }}>
                                ADD NEW STUDENT
                            </CustomButton>
                        </Box>
                    </Box>
                    <Divider sx={{ color: "#E5E5E5", maxWidth: "1110px", marginTop: "11.5px" }} />
                    <TableContainer sx={{ maxHeight: "600px", overflow: "auto" }}>
                        <Table sx={{ maxWidth: "100%" }}>
                            <TableHead>
                                <TableRow sx={{ borderRadius: "8px" }}>

                                    <TableCell sx={{ border: "none", display: "flex", justifyContent: "space-between", "&:hover": { cursor: "pointer" } }} onMouseEnter={() => showSortButton("name")} onMouseLeave={() => hideSortButton("name")}
                                        onClick={() => {
                                            if (editField) return;
                                            const sortedNameData = sortByName(studentData, 'asc');
                                            setCurrentPageData(sortedNameData);
                                        }}>
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

                                    <TableCell sx={{ border: "none", display: "flex", justifyContent: "space-between", "&:hover": { cursor: "pointer" } }} onMouseEnter={() => showSortButton("date")} onMouseLeave={() => hideSortButton("date")}
                                        onClick={() => { if (editField) return; const sortedDateData = sortByDate(context.studentData, 'asc'); setCurrentPageData(sortedDateData) }}>
                                        <CustomTypo color="#ACACAC" fontSize="12px">Date of Admission</CustomTypo>
                                        <img src={filter} alt="filter" width="12px" height="15.25px" style={{ marginRight: "30px", alignSelf: "center", display: "none" }} id="date" />
                                    </TableCell>

                                    <TableCell sx={{ border: "none", "&:hover": { cursor: "pointer" } }} align='left'>
                                        <CustomTypo color="#ACACAC" fontSize="12px">Actions</CustomTypo>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {emptyData ?
                                    <TableRow>
                                        <TableCell colSpan={7} rowSpan={7}>
                                            <Box sx={{ backgroundColor: "#edabab", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <CustomTypo fontSize="40px" color="red" fontWeight="300" >No Data to Show!</CustomTypo>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                    :
                                    currentPageData.slice(startIndex, endIndex).map((student, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#FFFFFF"
                                                , '&:not(:last-child) td, &:not(:last-child) th': { borderBottom: "10px solid #F8F8F8" },
                                            }}
                                        >
                                            <TableCell sx={{ border: "none" }}>
                                                {editField === student.id ? (
                                                    <CustomTextfield
                                                        className="editFields"
                                                        type="text"
                                                        error={validationError.includes("name error")}
                                                        helperText={validationError.includes("name error") && "Name cannot be Empty!!"}
                                                        name='name'
                                                        defaultValue={student.name}
                                                        onChange={(e) => handleEditInputChange(e, student)}
                                                    />
                                                ) : (
                                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                        {student.name}
                                                    </CustomTypo>
                                                )}
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                {editField === student.id ? (
                                                    <CustomTextfield
                                                        className="editFields"
                                                        type="text"
                                                        error={validationError.includes("email error") || userAlreadyExists}
                                                        helperText={(validationError.includes("email error") && "Enter Valid Email!!") || (userAlreadyExists && "email already exists!!")}
                                                        name='email'
                                                        defaultValue={student.email}
                                                        onChange={(e) => handleEditInputChange(e, student)}
                                                    />
                                                ) : (
                                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                        {student.email}
                                                    </CustomTypo>
                                                )}
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                {editField === student.id ? (
                                                    <CustomTextfield
                                                        className="editFields"
                                                        error={validationError.includes("phone error")}
                                                        helperText={validationError.includes("phone error") && "length must be 10!!"}
                                                        type="text"
                                                        name="phone"
                                                        defaultValue={student.phone}
                                                        onChange={(e) => handleEditInputChange(e, student)}
                                                    />
                                                ) : (
                                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                        {student.phone}
                                                    </CustomTypo>
                                                )}
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                {editField === student.id ? (
                                                    <CustomTextfield
                                                        type="text"
                                                        error={validationError.includes("enrollNo error")}
                                                        helperText={validationError.includes("enrollNo error") && "enroll Number cannot be empty!!"}
                                                        className="editFields"
                                                        name="enrollNumber"
                                                        defaultValue={student.enrollNumber}
                                                        onChange={(e) => handleEditInputChange(e, student)}
                                                    />
                                                ) : (
                                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                        {student.enrollNumber}
                                                    </CustomTypo>
                                                )}
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                {editField === student.id ? (
                                                    <CustomTextfield
                                                        type="date"
                                                        className="editFields"
                                                        error={validationError.includes("date error")}
                                                        helperText={validationError.includes("date error") && "Enter Valid Date!!"}
                                                        name="dateOfAdmission"
                                                        defaultValue={student.dateOfAdmission}
                                                        onChange={(e) => handleEditInputChange(e, student)}
                                                    />
                                                ) : (
                                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                        {student.dateOfAdmission}
                                                    </CustomTypo>
                                                )}
                                            </TableCell>
                                            <TableCell align="center" sx={{ border: "none" }}>
                                                <Box sx={{ display: "flex", gap: "33PX" }}>
                                                    {
                                                        editField === student.id ? <CustomButton width="50px" height="25px" fontSize="10px" onClick={() => updateStudent(student)}>Update</CustomButton>
                                                            :
                                                            <img src={editIcon} alt='view' style={{ cursor: "pointer" }} onClick={() => handleEditStudent(student)} />
                                                    }
                                                    <img src={deleteIcon} alt='view' style={{ cursor: "pointer" }} onClick={() => { if (editField) return; setOpenDeleteStudent(true); setDeleteUser(student) }} />
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomTypo>Page No: {currPageNo}</CustomTypo>
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                        <CustomPagination
                            count={totalPages !== 0 ? totalPages : 1}
                            page={currPageNo}
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
            </Box >
            <AddStudent openAddStudent={openAddStudent} setOpenAddStudent={setOpenAddStudent} />
            <DeleteStudent openDeleteStudent={openDeleteStudent} setOpenDeleteStudent={setOpenDeleteStudent} userToDelete={deleteUser} />
        </>
    )
}