import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomTypo from '../CustomComponents/CustomTypo';
import { Divider } from '@mui/material';
import CustomTextfield from '../CustomComponents/CustomTextfield';


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
                        <Box sx={{display:"flex",justifyCoontent:"start",gap:2}}>
                            <CustomTypo fontWeight="bold" fontSize="20px">
                                Add New Student
                            </CustomTypo>
                            <Divider />
                            <Box sx={{ display: "flex", flexWrap: "wrap",gap:2}}>
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
                            <CustomButton
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    )
}
