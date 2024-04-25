import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomTypo from '../CustomComponents/CustomTypo';
import { Divider } from '@mui/material';
import CustomTextfield from '../CustomComponents/CustomTextfield';
import CustomButton from "../CustomComponents/CustomButton"

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
    const handleClose = () => {
        setOpenAddStudent(false)
    }

    return (
        <>
            <div>
                <Modal
                    open={openAddStudent}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Box sx={{ display: "flex", justifyContent: "start", flexDirection: "column", gap: 2 }}>
                            <Box>
                                <CustomTypo fontWeight="bold" fontSize="20px">
                                    Add New Student
                                </CustomTypo>
                            </Box>
                            <Divider sx={{ margin: "10px 0px 20px 0px" }} />
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                                <Box>
                                    <CustomTextfield width="300px" height="50px" placeholder="Name" />
                                </Box>
                                <Box>
                                    <CustomTextfield width="300px" height="50px" placeholder="Email" type="email" />
                                </Box>
                                <Box>
                                    <CustomTextfield width="300px" height="50px" placeholder="Phone" type="tel" />
                                </Box>
                                <Box>
                                    <CustomTextfield width="300px" height="50px" placeholder="Enroll Number" />
                                </Box>
                                <Box>
                                    <CustomTextfield width="300px" height="50px" placeholder="Date of Admission" type="date" />
                                </Box>
                            </Box>
                            <Box>
                                <CustomButton type="submit">
                                    Add Student
                                </CustomButton>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    )
}
