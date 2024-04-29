import { Box } from "@mui/material";
import { style } from "../utils/constants"
import CustomTypo from "../CustomComponents/CustomTypo";
import CustomButton from "../CustomComponents/CustomButton";
import { useContext } from "react";
import { SomeContext } from "../context/context";
import Modal from '@mui/material/Modal';


const DeleteStudent = ({ openDeleteStudent, setOpenDeleteStudent }) => {
  const context = useContext(SomeContext)
  console.log(context.studentData)
  const handleClose = () => {
    setOpenDeleteStudent(false)
  }
  return (
    <>
      <Modal open={openDeleteStudent} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{marginBottom:"10px"}}>
            <CustomTypo>Are you sure you want to Delete the User?</CustomTypo>
          </Box>
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <CustomButton>
              Yes
            </CustomButton>
            <CustomButton onClick={handleClose}>
              No
            </CustomButton>
          </Box>
        </Box>
      </Modal>
    </>
  )
};

export default DeleteStudent
