import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomTypo from '../CustomComponents/CustomTypo';
import { Divider, Icon, IconButton } from '@mui/material';
import CustomTextfield from '../CustomComponents/CustomTextfield';
import CustomButton from "../CustomComponents/CustomButton"
import CloseIcon from '@mui/icons-material/Close';
import { validateInfo } from "../utils/validate"
import { formatDate, checkUserExists, generateUniqueId } from "../utils/helpers"
import { style } from "../utils/constants"
import { SomeContext } from '../context/context'
import { useState } from 'react';
import CustomSnackbar from '../CustomComponents/CustomSnackbar';

export default function AddStudent({ openAddStudent, setOpenAddStudent }) {
    const [validationError, setValidationError] = useState([])
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
    const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
    const context = React.useContext(SomeContext)

    const handleModalClose = () => {
        setOpenAddStudent(false)
        setValidationError([])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const studentObject = Object.fromEntries([...formData.entries()]);
        studentObject.id = generateUniqueId()
        try {
            const validateProvidedInfo = validateInfo(studentObject)
            if (validateProvidedInfo) {
                const dateObj = formatDate(studentObject.dateOfAdmission)
                studentObject.dateOfAdmission = dateObj
                const userExists = checkUserExists(context.studentData, studentObject.email, studentObject.enrollNumber)
                if (!userExists) {
                    context.setStudentData([...context.studentData, studentObject]);
                    setValidationError([])
                    setOpenSuccessSnackbar(true)
                    form.reset();
                    setTimeout(() => {
                        handleModalClose()
                    }, [1000])
                } else {
                    setOpenErrorSnackbar(true)
                }
            }
        } catch (error) {
            setValidationError(error.message.split(","))
        }
    }

    const handleErrorSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenErrorSnackbar(false);
    };

    const handleSuccessSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccessSnackbar(false);
    };

    return (
        <>
            <div>
                <Modal
                    open={openAddStudent}
                    onClose={handleModalClose}
                >
                    <Box sx={style}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <CustomTypo fontWeight="bold" fontSize="20px">
                                    Add New Student
                                </CustomTypo>
                                <IconButton style={{ border: '1px solid #FEAF00' }} onClick={handleModalClose}>
                                    <Icon style={{ color: '#FEAF00' }}><CloseIcon /></Icon>
                                </IconButton>
                            </Box>
                            <Divider sx={{ margin: "10px 0px 20px 0px" }} />
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                                    <Box>
                                        <CustomTextfield width="300px" height="50px" name="name" placeholder="Name"
                                            error={validationError.includes("name error")}
                                            helperText={validationError.includes("name error") && "Invalid Name"}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomTextfield width="300px" height="50px" name="email" placeholder="Email" type="email"
                                            error={validationError.includes("email error")}
                                            helperText={validationError.includes("email error") && "Invalid Email"}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomTextfield width="300px" height="50px" name="phone" placeholder="Phone" type="tel"
                                            error={validationError.includes("phone error")}
                                            helperText={validationError.includes("phone error") && "Invalid Phone Number(length must be 10)"}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomTextfield width="300px" height="50px" name="enrollNumber" placeholder="Enroll Number"
                                            error={validationError.includes("enrollNo error")}
                                            helperText={validationError.includes("enrollNo error") && "Invalid Enroll Number"}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomTextfield width="300px" height="50px" name="dateOfAdmission" placeholder="Date of Admission" type="date"
                                            error={validationError.includes("date error")}
                                            helperText={validationError.includes("date error") && "Enter Valid Date"}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    <CustomButton type="submit" >
                                        Add Student
                                    </CustomButton>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Modal>
                <CustomSnackbar open={openErrorSnackbar} onClose={handleErrorSnackbarClose} type="error">
                    User Already Exists!!
                </CustomSnackbar>
                <CustomSnackbar open={openSuccessSnackbar} onClose={handleSuccessSnackbarClose} type="success">
                    User Added Successfully!!
                </CustomSnackbar>
            </div>
        </>
    )
}
