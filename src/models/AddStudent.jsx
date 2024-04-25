import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomTypo from '../CustomComponents/CustomTypo';
import { Divider, Icon, IconButton } from '@mui/material';
import CustomTextfield from '../CustomComponents/CustomTextfield';
import CustomButton from "../CustomComponents/CustomButton"
import CloseIcon from '@mui/icons-material/Close';
import { validateInfo } from "../utils/validate"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function AddStudent({ openAddStudent, setOpenAddStudent }) {
    const [validationError, setValidationError] = React.useState([])
    const handleClose = () => {
        setOpenAddStudent(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const dataObject = Object.fromEntries([...formData.entries()]);
        try {
            const validateProvidedInfo = validateInfo(dataObject)
            if (validateProvidedInfo) {
                setValidationError([])
                console.log(dataObject);
            }
        } catch (error) {
            setValidationError(error.message.split(","))
        }
    }
    console.log(validationError)

    return (
        <>
            <div>
                <Modal
                    open={openAddStudent}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <CustomTypo fontWeight="bold" fontSize="20px">
                                    Add New Student
                                </CustomTypo>
                                <IconButton style={{ border: '1px solid #FEAF00' }} onClick={handleClose}>
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
                                        <CustomTextfield width="300px" height="50px" name="enrollNo" placeholder="Enroll Number"
                                            error={validationError.includes("enrollNo error")}
                                            helperText={validationError.includes("enrollNo error") && "Invalid Enroll Number"}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomTextfield width="300px" height="50px" name="date" placeholder="Date of Admission" type="date"
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
            </div>
        </>
    )
}
