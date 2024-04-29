import { Box } from "@mui/material";
import { style } from "../utils/constants"
import CustomTypo from "../CustomComponents/CustomTypo";
import CustomButton from "../CustomComponents/CustomButton";
import { useContext } from "react";
import { SomeContext } from "../context/context";
import Modal from '@mui/material/Modal';


const DeleteStudent = ({ openDeleteStudent, setOpenDeleteStudent, userToDelete }) => {
  const context = useContext(SomeContext)
  const handleDelete = () => {
    let indexToRemove = context.studentData.findIndex(obj => obj.email === userToDelete.email);
    if (indexToRemove !== -1) {
      context.studentData.splice(indexToRemove, 1)
      context.setStudentData(context.studentData)
      handleClose()
    }
  }

  const handleClose = () => {
    setOpenDeleteStudent(false)
  }
  return (
    <>
      <Modal open={openDeleteStudent} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ marginBottom: "10px" }}>
            <CustomTypo>Are you sure you want to Delete the Below User?</CustomTypo>
            <CustomTypo>
              {JSON.stringify(userToDelete)}
            </CustomTypo>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CustomButton onClick={handleDelete}>
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
